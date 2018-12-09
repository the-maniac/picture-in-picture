function callPictureInPicture() {
  var video = document.querySelector('video');
  if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
  } else if (video) {
    video.requestPictureInPicture();
  } else if (!video && window.isTopFrame) {
    var frames = document.getElementsByTagName('iframe');
    for (var i in frames) {
      frames[i].contentWindow.postMessage({pictureInPicture: true}, '*');
    }
  }
}

if (!window.isTopFrame) {
  window.addEventListener('message', function (event) {
    if (event.data.pictureInPicture) {
        callPictureInPicture();
    }
  }, false);
}