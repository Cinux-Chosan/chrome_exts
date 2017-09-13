

chrome.webRequest.onBeforeRequest.addListener(() => {
  alert('aaaa');
}, {
  urls: ["<all_urls>"]
}, ["blocking"]);
