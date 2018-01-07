function activateCamera() {
  // Prefer camera resolution nearest to 1280x720.
  var constraints = { audio: false, video: { width: 600, height: 400 } };

  navigator.mediaDevices.getUserMedia(constraints)
  .then(function(mediaStream) {
    var video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
      video.play();
    };
  })
  .catch(function(err) { alert(err.name + ": " + err.message); }); // always check for errors at the end.
}


if (navigator.serviceWorker != null) {
  navigator.serviceWorker.register('service-worker.js')
  .then(function(registration) {
    console.log('Registered events at scope: ', registration.scope);
  });
}
