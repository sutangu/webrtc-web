'use strict';

const constraints = {
    video: true
};

const video = document.querySelector('video');

function handleSuccess(stream) {
    video.srcObject = stream;
}

function handleError(error) {
    console.error('getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError);
