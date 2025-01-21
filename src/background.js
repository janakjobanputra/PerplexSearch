// Create context menu on extension installation
chrome.runtime.onInstalled.addListener(() => {
  try {
    chrome.contextMenus.create({
      id: "searchPerplexity",
      title: "Search in Perplexity",
      contexts: ["selection"]
    }, () => {
      if (chrome.runtime.lastError) {
        console.error('Context menu creation failed:', chrome.runtime.lastError);
      }
    });
  } catch (error) {
    console.error('Error during installation:', error);
  }
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchPerplexity") {
    try {
      const searchUrl = `https://www.perplexity.ai/?q=${encodeURIComponent(info.selectionText)}`;
      chrome.tabs.create({
        url: searchUrl,
        active: true
      }, () => {
        if (chrome.runtime.lastError) {
          console.error('Tab creation failed:', chrome.runtime.lastError);
        }
      });
    } catch (error) {
      console.error('Error handling context menu click:', error);
    }
  }
}); 