chrome.action.onClicked.addListener(async (tab) => {
  chrome.tabs.sendMessage(tab.id, { action: 'RunPictureInPicture' });
});
