// This code is forked from: https://gist.github.com/icodejs/3183154

const constMock = navigator.sendBeacon;
navigator.sendBeacon = function () {
  var url = arguments[0];
  //console.log(arguments);
  var reader = new FileReader();

  // This fires after the blob has been read
  reader.addEventListener("loadend", (e) => {
    //console.log(e.target.result);
    //console.log(decodeURIComponent(e.target.result));
    var text = decodeURIComponent(e.target.result);
    const regex = /^.*=/gm;
    text = text.replace(regex, "");
    console.log(text);
    var obj;
    try {
      obj = JSON.parse(text);
    } catch (e) {
      console.log(e);
      obj = text;
    }

    warnJson = {
      type: "responseBeacon",
      url: url,
      requestData: obj,
    };
    console.warn(JSON.stringify(warnJson));
    //if (window.events == undefined) window.events = [];
    //window.events.push(JSON.stringify(warnJson));
    //window.postMessage({ type: "beacon", url: url, content: obj });
  });

  // Start reading the contents of blob
  //console.log(arguments[1]);
  reader.readAsText(arguments[1]);

  let returnvalue = constMock.apply(this, arguments);
};

window.COVEO_LOADED = true;

var open = window.XMLHttpRequest.prototype.open,
  send = window.XMLHttpRequest.prototype.send,
  onReadyStateChange;

function openReplacement(method, url, async, user, password) {
  var syncMode = async !== false ? "async" : "sync";
  this.syncMode = syncMode;
  this.method = method;
  this.url = url;

  return open.apply(this, arguments);
}

function sendReplacement(data) {
  if (this.onreadystatechange) {
    this._onreadystatechange = this.onreadystatechange;
  }
  this.onreadystatechange = onReadyStateChangeReplacement;
  this.requestData = data;

  return send.apply(this, arguments);
}

function onReadyStateChangeReplacement() {
  warnJson = {
    type: "response",
    syncMode: this.syncMode,
    method: this.method,
    url: this.url,
    requestData: this.requestData,
    readyState: this.readyState,
    //responseText: this.responseText,
    responseCode: this.status,
    //responseHeader: this.getAllResponseHeaders(),
  };
  console.warn(JSON.stringify(warnJson));
  //if (window.events == undefined) window.events = [];
  //window.events.push(JSON.stringify(warnJson));
  //window.postMessage({ type: "http", url: this.url, content: warnJson });

  if (this._onreadystatechange) {
    return this._onreadystatechange.apply(this, arguments);
  }
}

function getEvents() {
  return window.events || [];
}

window.XMLHttpRequest.prototype.open = openReplacement;
window.XMLHttpRequest.prototype.send = sendReplacement;
console.log("ADDING AJAX LISTENER");
