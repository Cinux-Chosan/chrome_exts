var newScript = document.createElement('script');
console.log(chrome.extension);
chrome.runtime.onConnect.addListener(a => {
  debugger
})
chrome.extension.onRequest.addListener(a => {
  debugger
})
newScript.type = 'text/javascript';
  // document.write("<script>debugger;alert(1);</script>");
  newScript.innerHTML = `

  //(function() {
    var _XMLHttpRequest = window.XMLHttpRequest;
    window.XMLHttpRequest = function(flags) {
      var req;
      req = new _XMLHttpRequest(flags);
      monitorXHR(req);
      return req;
    };

    monitorXHR = function(req) {
      var _open;
      _open = req.open;
      return req.open = function(type, url, isSync = true) {
        console.log('XHR:', url);
        if (url.indexOf('wreport.meituan.net') != -1) {
          var decodeBase64 = atob(GetQueryString(url, 'data'));
           decodeBase64 && alert(decodeBase64);
        }
        return _open.apply(req, arguments);
      };
    };

    var _fetch = window.fetch;
    window.fetch = function(url) {
      console.log('fetch:', url);
      if (url.indexOf('wreport.meituan.net') != -1) {
        var decodeBase64 = atob(GetQueryString(url, 'data'));
         decodeBase64 && alert(decodeBase64);
      }
      return _fetch.apply(null, arguments);
    }

    function GetQueryString(url, name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = url.split('?')[1].match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }

//})();

  `

  // var _readystatechange = document.onreadystatechange;
  // document.onreadystatechange = function() {
  //   // document.head.prepend(newScript);
  //
  //   // _readystatechange(arguments);
  // }

  document.addEventListener('readystatechange', function(e) {
    console.log(document.body);
    console.log(document.readyState);
    // document.head.prepend(newScript)
  })
  // document.addEventListener('DOMContentLoaded', e => {
  //   debugger
  //   document.head.prepend(newScript)
  // })
