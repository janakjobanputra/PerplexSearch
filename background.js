chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchPerplexity",
    title: "Search in Perplexity",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchPerplexity") {
    const searchUrl = `https://www.perplexity.ai/?q=${encodeURIComponent(info.selectionText)}`;
    chrome.tabs.create({ url: searchUrl });
  }
}); 