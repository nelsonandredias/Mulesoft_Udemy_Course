
      var st=document.getElementsByTagName('script');
      var au=st[st.length - 1].src;
      var bp = au.replace('apic-import.js', '');
      var legacyScriptsCount = 0;
      function styleDocument() {
        document.addEventListener('WebComponentsReady', function() {
          setTimeout(function() {
            function shouldAddDocumentStyle(n) {
              return n.nodeType === Node.ELEMENT_NODE && n.localName === 'style' && !n.hasAttribute('scope');
            }
            const CustomStyleInterface = window.ShadyCSS.CustomStyleInterface;
            const candidates = document.querySelectorAll('style');
            for (let i = 0; i < candidates.length; i++) {
              const candidate = candidates[i];
              if (shouldAddDocumentStyle(candidate)) {
                CustomStyleInterface.addCustomStyle(candidate);
              }
            }
          }, 1000);
        });
      }
      function loadConsoleWhenDone(){
        legacyScriptsCount++
        if(legacyScriptsCount==3 && isLegacy()==true){
          loadConsole();
          styleDocument();
        }
      }
      function addScript(src, onLoadCallback) {
        var s = document.createElement('script');
        s.setAttribute('nomodule', '');
        s.src = bp + src;
        s.onload = onLoadCallback;
        document.body.appendChild(s);
      }
    addScript('./vendor.js',loadConsoleWhenDone);addScript('polyfills/core-js.577a5602a7262d6256830802d4aaab43.js',loadConsoleWhenDone);addScript('polyfills/systemjs.6dfbfd8f2c3e558918ed74d133a6757a.js',loadConsoleWhenDone);addScript('polyfills/regenerator-runtime.9090ed1c23690e3072c21a7873cad285.js',loadConsoleWhenDone);function loadConsole() {try{s = document.createElement('script');s.innerHTML = 'window.importShim = s => import(s)';document.body.appendChild(s);}catch(e){console.log(e);};try{!function(){function e(t,n){return new Promise(function(e,o){document.head.appendChild(Object.assign(document.createElement("script"),{src:bp+t,onload:e,onerror:o},n?{type:"module"}:void 0))})}var o=[];function t(){"noModule"in HTMLScriptElement.prototype?window.importShim(bp+"api-console-450fc61e.js"):System.import(bp+"legacy/api-console-4992dc4a.js")}"fetch"in window||o.push(e("polyfills/fetch.191258a74d74243758f52065f3d0962a.js",!1)),"noModule"in HTMLScriptElement.prototype&&!("importShim"in window)&&o.push(e("polyfills/dynamic-import.b745cfc9384367cc18b42bbef2bbdcd9.js",!1)),"attachShadow"in Element.prototype&&"getRootNode"in Element.prototype&&(!window.ShadyDOM||!window.ShadyDOM.force)||o.push(e("polyfills/webcomponents.6954abecfe8b165751e6bc9b0af6c639.js",!1)),!("noModule"in HTMLScriptElement.prototype)&&"getRootNode"in Element.prototype&&o.push(e("polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",!1)),o.length?Promise.all(o).then(t):t()}()}catch(e){console.log(e);};}
    function isLegacy() {
      const script = document.createElement('script');
      return !('noModule' in script);
    }
    if(isLegacy()==false){
      loadConsole();
    }
    