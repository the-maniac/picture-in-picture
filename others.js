// Check if video element exists and handle PiP
const handlePictureInPicture = async (video) => {
  try {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else if (video) {
      await video.requestPictureInPicture();
    }
  } catch (error) {
    console.error('Picture-in-Picture failed:', error);
  }
};

// Function to find all video elements in the current document or within iframes
const findAllVideos = () => {
  return Array.from(document.querySelectorAll('video'));
};

// Main Picture in Picture function
const callPictureInPicture = async () => {
  const videos = findAllVideos();
  if (videos.length > 0) {
    // Handle the first video found
    await handlePictureInPicture(videos[0]);
  } else {
    console.warn('No video elements found in the current document or iframes.');
  }
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'RunPictureInPicture') {
    callPictureInPicture().then(() => console.log('Picture-in-Picture started.'));
  }
});