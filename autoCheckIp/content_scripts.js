  setTimeout(click, 100);

  if (window == top) {
    window.addEventListener('message', function(m) {
      if (m.data == 'OK') {
        if (document.body.children[1].style.visibility == 'hidden') {
          window.document.forms[0].submit.click();
        }
      } else {
        var data = JSON.parse(m.data);
        if (data.messageType == 'd' && data.message.l && data.message.m) {
          setTimeout(function() {
            window.document.forms[0].submit.click();
          }, 1200);
        }
      }
    });
  }

  function click() {
    var el = document.getElementsByClassName('rc-anchor-checkbox-holder');
    if (el.length) {
      el[0].click();
      setTimeout(function() {
        top.postMessage('OK', '*');
      }, 2000);
    } else {
      setTimeout(click, 100);
    }
  }
