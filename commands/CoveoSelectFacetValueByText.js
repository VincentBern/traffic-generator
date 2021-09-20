const { SelectorExtract } = require('../Utils/Utilities');

/**
 * Clicks on a result item based on provided text
 * @param  {[string]} facetValue String to search product by
 * @param  {[Object]} Selectors Object containing selectors
 * @param  {[Object]} facetName Name of facet selector as it appears in the JSON selectors file
 * @return {[Promise]} true if facet value click was successful, false if it wasn't
 */

facetValue = "",
  Selectors = null;

module.exports = class CoveoSelectFacetValueByText {

  elemntText = async function (currentFacetValue, ElementIDvalue) {
    let correctedValue = false;
    await this.api.elementIdText(ElementIDvalue, (text) => {
      if (text.value.toLowerCase() === currentFacetValue.toLowerCase()) {
        correctedValue = text.value;
      }
    });
    return correctedValue;
  };

  getProperFacetValue = async function (currentFacetValue, xpathAllValuesSelector) {
    return new Promise((res) => {
      this.api.elements('xpath', xpathAllValuesSelector, async (elements) => {

        for (const element of elements.value) {
          const correctedValue = await this.elemntText(currentFacetValue, element.ELEMENT);
          if (correctedValue) {
            res(correctedValue);
            break;
          }
        };
        res(false);
      });
    });
  };

  selectFacetValueRecursive = async function (
    facetValue,
    Selectors,
    facetName,
  ) {

    const xpathFacetValueSelector =
      SelectorExtract(Selectors, { facetName }).getParentChildSelector(
        "facetSelector",
        "facetValueSelector",
        "xpath"
      );

    // If facet value is an array, get the first value
    let currentFacetValue = Array.isArray(facetValue) ? facetValue[0] : facetValue;

    // Get the real text value of the facet (if there is any that matches)
    currentFacetValue =
      await this.getProperFacetValue(
        currentFacetValue,
        xpathFacetValueSelector
      );

    // if there is no match, request for more facet values
    if (!currentFacetValue) {
      const Selector_facet_moreButton =
        SelectorExtract(Selectors, { facetName }).getParentChildSelector(
          "facetSelector",
          "facetMoreButtonSelector"
        );

      let facetMoreButtonRes = await this.api.click(Selector_facet_moreButton);

      if (facetMoreButtonRes.status !== -1) {
        await this.api.pause(1000);
        return await this.selectFacetValueRecursive(
          facetValue,
          Selectors
        );
      }
      else {
        // When there are no more results to request
        return false;
      }
    }

    // If there is a match for the facet Value
    else {

      const xpathFacetWithText =
        SelectorExtract(Selectors, { facetName }).getParentChildSelector(
          "facetSelector",
          "facetValueSelector",
          "xpath",
          "[contains(.,'" + currentFacetValue + "')]"
        );

      // Click on element using execute
      let clickRes = await this.api.CoveoClick(xpathFacetWithText);

      await this.api.pause(1000);

      // Remove last item from array
      if (Array.isArray(facetValue)) {
        facetValue.shift();

        // If the click on the first value is successful and there is a following value run the method again
        if (clickRes && facetValue.length > 0) {
          return await this.selectFacetValueRecursive(
            facetValue,
            Selectors
          );
        }
        else {
          return true;
        }
      }
    }
  };

  randomSelection = async function (Selectors, facetName) {
    return new Promise((res) => {

      const facetValueXpath =
        SelectorExtract(Selectors, { facetName }).getParentChildSelector(
          "facetSelector",
          "facetValueSelector",
          'xpath'
        );

      this.api.elements('xpath', facetValueXpath, async (elements) => {

        let randomValue = Math.ceil(Math.random() * elements.value.length - 1);
        this.api.elementIdText(elements.value[randomValue].ELEMENT, async (elementText) => {

          const xpathFacetWithText =
            SelectorExtract(Selectors, { facetName }).getParentChildSelector(
              "facetSelector",
              "facetValueSelector",
              'xpath',
              "[contains(.," + elementText.value + "')]"
            );

          // const clickRes = await this.clickFacetValue(xpathFacetWithText);
          let clickRes = await this.api.CoveoClick(xpathFacetWithText);

          if (clickRes) {
            res(true);
          }
        });

      });
    });
  };

  async command(
    facetValue = "",
    Selectors = null,
    facetName = "category"
  ) {

    let res;
    if (facetValue === "" || facetValue === "RND") {
      res = await this.randomSelection(Selectors, facetName);
    }
    else {
      res = await this.selectFacetValueRecursive(facetValue, Selectors, facetName);
    }

    await this.api.pause(1000);

    return res;
  }
};
