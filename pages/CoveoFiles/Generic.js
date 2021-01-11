let prevRND = 1;
let currentPause = 500;
let waitRetry = 2000;

const coveoGenericCommands = {
  //*******************************************************
  //getRandomInt, for getting random results
  //*******************************************************
  getRandomInt: function (min, max) {
    let number = Math.floor(Math.random() * Math.floor(10));
    if (number < min) number = min;
    if (number > max) number = max;
    while (prevRND == number) number = this.getRandomInt(min, max);
    return number;
  },
  getMaxResults: function (selector = "") {
    selector += " .CoveoResult";
    selector = selector.trim();
    let max = 0;
    return new Promise((resolve) => {
      this.api.elements("css selector", selector, (labels) => {
        max = labels.value.length - 1;
        console.log(max);
        if (max == -1) {
          this.api.elements(
            "xpath",
            '//a[contains(@class,"CoveoResultLink")]',
            (labels) => {
              console.log("MaxResults2: " + labels.value.length);
              max = labels.value.length - 1;
              resolve(max);
            }
          );
        } else {
          console.log("MaxResults: " + max);
          resolve(max);
        }
      });
    });
  },
  //*******************************************************
  //c_setPause, to set timing between events
  //*******************************************************
  c_setPause: function (nr) {
    currentPause = nr;
  },
  //*******************************************************
  //c_Pause, pause, using the currentPause
  //*******************************************************
  c_Pause: function (nr) {
    this.api.pause(currentPause);
  },
  //*******************************************************
  //c_makeVisible, make elements visible
  //*******************************************************
  c_makeVisible: function (selector) {
    return this.api.execute(
      function (selector) {
        const element = document.querySelectorAll(selector);
        element.forEach((el) => {
          el.setAttribute("style", "display:inherit");
        });
      },
      [selector]
    );
  },
  //*******************************************************
  //c_moveToElement, click on an element
  //*******************************************************
  c_moveToElement: function (selector, x, y) {
    let _this = this;
    return new Promise((resolve) => {
      this.c_waitForElement(selector).then(function (result) {
        if (result) {
          console.log("MoveToElement: " + selector);
          _this.moveToElement(selector, x, y, (result) => {
            if (result.status != -1) {
              console.log("MoveToElement, done: " + selector);
              _this.c_Pause();
              resolve(true);
            } else {
              console.log("MoveToElement, failed: " + selector);
              resolve(false);
            }
          });
        } else {
          resolve(false);
        }
      });
    });
  },
  //*******************************************************
  //c_waitForElement, wait for Element
  //*******************************************************
  c_waitForElement: function (selector, using = "css selector") {
    let _this = this;
    return new Promise((resolve) => {
      //First try isVisible
      this.isVisible(using, selector, (result) => {
        //If visible
        if (result.status != -1) {
          console.log("WaitForElement - visible, done: " + selector);

          _this.c_Pause();
          resolve(true);
          return;
        }
        //Not visible, wait, and move to the element
        console.log("WaitForElement - NOT visible, moving to it: " + selector);
        _this.c_Pause(waitRetry);
        _this.moveToElement(using, selector, 10, 10, (result) => {
          if (result.status != -1) {
            _this.isVisible(using, selector, (result) => {
              //If visible
              if (result.status != -1) {
                console.log("MoveToElement - after move, done: " + selector);

                _this.c_Pause();
                resolve(true);
                return;
              } else {
                console.log("MoveToElement - after move, failed: " + selector);
                resolve(false);
                return;
              }
            });
          } else {
            resolve(false);
            return;
          }
        });
      });
    });
  },
  //*******************************************************
  //c_click, click on element
  //*******************************************************
  c_click: function (selector, using = "css selector") {
    let _this = this;
    console.log("In Click on Element " + selector);
    return new Promise((resolve) => {
      this.c_waitForElement(selector, using).then(function (result) {
        console.log(result);
        if (result) {
          console.log("Click on Element " + selector);
          _this.c_Pause();
          _this.click(
            {
              using: using,
              selector: selector,
              abortOnFailure: false,
              suppressNotFoundErrors: true,
            },
            (result) => {
              if (result.status != -1) {
                console.log("CLICKED ON " + selector);
                _this.c_Pause();
                resolve(true);
              } else {
                console.log(
                  "NO Click because element was not found (step 2) " + selector
                );
                resolve(false);
              }
            }
          );
        } else {
          console.log(
            "NO Click because element was not found (step 1) " + selector
          );
          resolve(false);
        }
      });
    });
  },
  //*******************************************************
  //c_setValue, set Value on specific element
  //*******************************************************
  c_setValue: function (selector, val, callback) {
    let _this = this;
    return new Promise((resolve) => {
      this.c_waitForElement(selector).then(function (result) {
        if (result) {
          console.log("setValue - after wait: " + selector);
          _this.setValue(selector, val, (result) => {
            if (result.status != -1) {
              console.log("setValue - done: " + selector);
              _this.c_Pause();

              resolve(true);
            } else {
              console.log("setValue - failed: " + selector);
              resolve(false);
            }
          });
        } else {
          console.log("setValue - directly failed: " + selector);
          resolve(false);
        }
      });
    });
  },
};

module.exports = {
  commands: [coveoGenericCommands],
};
