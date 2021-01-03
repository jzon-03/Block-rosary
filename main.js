const video = document.getElementById('video');

function startup() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            // width:{min:screenHeight*.95,ideal:screenHeight*.95,max:screenHeight*.95},
            facingMode: {
                exact: 'environment'
            }
        }
    }).then(stream => {
        video.srcObject = stream;
    }).catch(console.error)
}

window.addEventListener('load', startup, false);