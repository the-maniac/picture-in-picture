//adding button click event
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, {code: "callPictureInPicture();"});
});