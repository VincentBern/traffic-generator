let LAST_SEARCH_UID = '0';

module.exports = class CustomCommand {
  async command(lastSearchUid) {
    if (!lastSearchUid) {
      lastSearchUid = LAST_SEARCH_UID;
    }
    let tryCount = 25;

    let lastResponse = null;
    let gotNewSearch = false;
    while (!gotNewSearch && tryCount > 0) {
      lastResponse = await this.api.getLastResponse();
      let responseSearchUid = (lastResponse && lastResponse.searchUid);
      if (responseSearchUid !== lastSearchUid) {
        gotNewSearch = true;
        LAST_SEARCH_UID = responseSearchUid;
        break;
      }
      tryCount--;
      await this.api.pause(250);
    }
    if (tryCount < 1) {
      console.warn('CoveoWaitForSearch: Failed to get a new search response.');
    }

    return { ...lastResponse, status: 0 };
  }
};
