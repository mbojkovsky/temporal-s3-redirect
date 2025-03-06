/**
 * Browser API Polyfill
 *
 * This script provides a unified API for extensions to work in both Chrome and Firefox.
 * It detects the browser environment and creates a global 'browser' object that works
 * consistently across browsers.
 */

(function () {
  // Check if we're in Firefox (has browser namespace) or Chrome (has chrome namespace)
  if (typeof browser === "undefined" && typeof chrome !== "undefined") {
    // We're in Chrome, create a browser object that maps to chrome APIs
    window.browser = {
      runtime: {
        onMessage: chrome.runtime.onMessage,
        onInstalled: chrome.runtime.onInstalled,
        sendMessage: chrome.runtime.sendMessage,
      },
      tabs: {
        sendMessage: chrome.tabs.sendMessage,
        create: chrome.tabs.create,
      },
      contextMenus: {
        create: chrome.contextMenus.create,
        onClicked: chrome.contextMenus.onClicked,
      },
    };
  }
})();
