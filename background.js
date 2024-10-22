chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ website: "example.com" }, () => {
      console.log("Default website set to example.com");
    });
  });
  
  chrome.action.onClicked.addListener(() => {
    chrome.storage.sync.get("website", ({ website }) => {
      const siteUrl = `*://*.${website}/*`;
      chrome.browsingData.remove({
        origins: [siteUrl],
        since: 0
      }, {
        "history": true
      }, () => {
        console.log(`All history for ${website} has been deleted.`);
      });
    });
  });
  