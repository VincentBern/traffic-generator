const { SelectorExtract } = require('../Utils/Utilities');

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
  }

  clickFacetValue = async function (xpathFacetValue) {
    // Click on element using execute
    return new Promise(async (res) => {
      return await this.api.execute(function (xpathFacetValue) {
        return new Promise(async (executeResolve) => {
          // Get element by xpath inside broswer
          function getElementByXpath(path) {
            return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          }

          // Add an event listener to facet value using xpath
          var evt = new Event("click", { "bubbles": true });
          getElementByXpath(xpathFacetValue).addEventListener("click", (e) => {
            executeResolve('clicked');
          });
          getElementByXpath(xpathFacetValue).dispatchEvent(evt);
        })
      }, [xpathFacetValue], function (r) {
        if (r.value === 'clicked') {
          res(true);
        }
      });
    })
  }

  selectFacetValueRecursive = async function (
    facetValue,
    Selectors
  ) {

    const xpathFacetValueSelector =
      SelectorExtract(Selectors).getParentChildSelector(
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
        SelectorExtract(Selectors).getParentChildSelector(
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
        SelectorExtract(Selectors).getParentChildSelector(
          "facetSelector",
          "facetValueSelector",
          "xpath",
          "[contains(text(),'" + currentFacetValue + "')]"
        );

      // Click on element using execute
      let res = await this.clickFacetValue(xpathFacetWithText);

      await this.api.pause(1000);

      // Remove last item from array
      if (Array.isArray(facetValue)) {
        facetValue.shift();

        // If the click on the first value is successful and there is a following value run the method again
        if (res && facetValue.length > 0) {
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
  }

  randomSelection = async function (Selectors) {

    return new Promise((res) => {

      const facetValueXpath =
        SelectorExtract(Selectors).getParentChildSelector(
          "facetSelector",
          "facetValueSelector",
          'xpath'
        );

      this.api.elements('xpath', facetValueXpath, async (elements) => {

        let randomValue = Math.ceil(Math.random() * elements.value.length - 1);
        this.api.elementIdText(elements.value[randomValue].ELEMENT, async (elementText) => {

          const xpathFacetWithText =
            SelectorExtract(Selectors).getParentChildSelector(
              "facetSelector",
              "facetValueSelector",
              'xpath',
              "[contains(text()," + elementText.value + "')]"
            );

          const clickRes = await this.clickFacetValue(xpathFacetWithText);

          if (clickRes) {
            res(true);
          }
        });

      });
    })
  }

  async command(
    facetValue = "",
    Selectors = null
  ) {

    let res;
    if (facetValue === "" || facetValue === "RND") {
      res = await this.randomSelection(Selectors);
    }
    else {
      res = await this.selectFacetValueRecursive(facetValue, Selectors);
    }

    await this.api.pause(1000);

    return res;
  }
};
