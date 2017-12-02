/*
 * inside search.yahoo.co.jp result pages, onmousedown event will rewrite an url, and direct the link
 * to http://search.yahoo.co.jp again. somehow the server will reject the request. so what I do here
 * is to make onmousedown() exec an empty function.
 *
 * 2017-12-01/joshua-shanghai
*/
(function(view) {
    function injectJs(tabId, fileName, succeededMessage, addedToHead, addedAsFirstChild, withOption) {
        var pluginPath = chrome.extension.getURL(fileName);
        var injectedScript = "(function(d){var e=d.createElement('script');";
        injectedScript += (withOption ? "e.setAttribute('" + withOption + "', '" + withOption + "');" : "");
        injectedScript += "e.setAttribute('type','text/javascript');e.setAttribute('src','" + pluginPath + "');";
        injectedScript += (addedToHead ? "d.head" : "d.body");
        injectedScript += (addedAsFirstChild ? ".insertBefore(e,d.head.firstChild)" : ".appendChild(e)");
        injectedScript += "}(document));";
        chrome.tabs.executeScript(tabId, {
            code: injectedScript,
            runAt: "document_end"
        }, function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            } else {
                console.log(succeededMessage);
            }
        });
    }

    // default to on
    var onoff = "on";

    chrome.browserAction.onClicked.addListener(function(tabInfo) {
        onoff = (onoff === "on") ? "off" : "on";
        // alert(onoff);

        chrome.browserAction.setIcon({
            path: "./img/icon-" + onoff + ".png"
        });
    }); 

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if ((onoff === "on") && (tab.status === "complete")) {
          injectJs(tabId, "js/yjp-lswap.js", "injection done.", true, false, 'async');
        }
    });
})(
    typeof self !== "undefined" && self ||
    typeof window !== "undefined" && window ||
    this.content
);
