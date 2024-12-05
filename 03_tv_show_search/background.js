chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create({
        title: "Test Context Menu",
        id: "tv-show-search",
        contexts: ["page", "selection"]
    })
    chrome.contextMenus.onClicked.addListener((event) => {
        console.log(event)
        // chrome.search.query({
        //     disposition: "NEW_TAB",
        //     text: event.selectionText
        // })
        chrome.tabs.query({
            url: `https://www.imdb.com/find?q=${event.selectionText}&ref=nv_sr_sm`
        })
    })
})

chrome.storage.local.get(["text"], (res) => {
    console.log(res.text)
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  console.log(sender);
  sendResponse("Receive message from background");
  chrome.tabs.sendMessage(sender.tab.id, "Hello from background");
});