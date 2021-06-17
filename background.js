chrome.tabs.onUpdated.addListener((tabId, statusChange, tab) => {
  if (statusChange.status === 'complete'
    && tab.url) {
      executeScript();
  }
});

let executeScript = () => {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ['contentScript.js']
  });
}