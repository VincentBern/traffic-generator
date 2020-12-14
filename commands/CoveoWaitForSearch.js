let LAST_SEARCH_UID = '0';

module.exports = class CustomCommand {
  async command(lastSearchUid) {
    if (!lastSearchUid) {
      lastSearchUid = LAST_SEARCH_UID;
    }

    let lastResponse = null;
    let gotNewSearch = false;
    while (!gotNewSearch) {
      lastResponse = await this.api.getLastResponse();
      if (lastResponse && lastResponse.searchUid !== lastSearchUid) {
        gotNewSearch = true;
        LAST_SEARCH_UID = lastResponse.searchUid;
        break;
      }
      await this.api.pause(250);
    }

    return { ...lastResponse, status: 0 };
  }
};
