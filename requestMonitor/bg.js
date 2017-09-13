chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log(details);
    chrome.tabs.query({
      active: true
    }, function(tabs) {
      tabs.forEach(function(el) {
        chrome.tabs.sendMessage(el.id, details);
      })
    })
  }, {
    urls: [
      "*://*.meituan.com/*", "*://*.meituan.net/*"
    ]
  }, [
    "requestBody"
  ]
);
