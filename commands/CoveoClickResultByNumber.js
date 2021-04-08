const { SelectorExtract } = require('../Utils/Utilities');

/**
 * Clicks on a result item based on list index numner
 * @param  {[number]} nthValue Result index number
 * @param  {[string]} Selector Custom Selector (not requeried)
 * @return {[Promise]} true if click was successful, false if it wasn't
 */

module.exports = class CoveoClickResultByNumber {

  getRandomInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max));
  }

  clickResult(ResultCardSelector, resultLinkSelector, nthValue) {
    return new Promise(async (res) => {

      return await this.api.execute(function (ResultCardSelector, resultLinkSelector, nthValue) {
        return new Promise(async (executeResolve) => {

          function getRandomInt(min, max) {
            return min + Math.floor(Math.random() * Math.floor(max));
          }

          let wasClicked = false;

          // Get element by xpath inside broswer          
          var allResults = document.querySelectorAll(ResultCardSelector);

          var index = typeof nthValue === 'string' ? getRandomInt(0, allResults.length - 1) : nthValue - 1;

          var _resultCardSelector = allResults[index];

          var _resultLinkSelector = _resultCardSelector.querySelector(resultLinkSelector);

          if (!_resultLinkSelector) {
            executeResolve('noClick');
          }

          _resultLinkSelector.addEventListener("click", (e) => {
            wasClicked = true;
            executeResolve('clicked');
          });

          if (!wasClicked) {
            _resultLinkSelector.click();
          }

          // In case selector.click() didn't work
          setTimeout(() => {
            var clickEvent = new Event('click', { bubbles: true });
            if (!wasClicked) {
              _resultLinkSelector.dispatchEvent(clickEvent);
            }
          }, 1000);
        })
      }, [ResultCardSelector, resultLinkSelector, nthValue], function (r) {
        if (r.value === 'clicked') {
          res(true);
        }
        res(false);
      });
    })
  }

  async command(
    nthValue = "RND",
    Selectors = null
  ) {

    const Selector_resultList_ResultCard
      = SelectorExtract(Selectors).getParentChildSelector("resultListSelector", "resultCardSelector");

    const resultLinkSelector = SelectorExtract(Selectors).getSelector('resultLinkSelector');

    let res = await this.api.isVisible(Selector_resultList_ResultCard);

    res = await this.clickResult(Selector_resultList_ResultCard, resultLinkSelector, nthValue);

    await this.api.pause(1000);
    return res;
  }
};
