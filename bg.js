alert('aaaa111');

chrome.webRequest.onBeforeRequest.addListener(() => {
  alert('aaaa');
});
