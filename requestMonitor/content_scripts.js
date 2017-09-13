chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var data = GetQueryString(request.url, 'data');
  if (data) {
    var base64;
    try {
      base64 = atob(data);
    } catch (e) {
      console.log(e);
    }
    if (base64) {
      alert(base64);
    }
  }
});

function GetQueryString(url, name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var queryParams = url.split('?')[1]
  if (queryParams) {
    var r = queryParams.match(reg);
    if (r != null) return unescape(r[2]);
  }
  return null;
}
