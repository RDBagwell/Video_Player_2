const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const videoPlayer = document.getElementById('video');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const durationEl = document.getElementById('duration');

function playVideo() {
    playBtn.children[0].classList.remove('fa-play');
    playBtn.children[0].classList.add('fa-pause');
    videoPlayer.play();
}

function pauseVideo() {
    playBtn.children[0].classList.add('fa-play');
    playBtn.children[0].classList.remove('fa-pause');
    videoPlayer.pause();
}

function stopVideo() {
    pauseVideo();
    videoPlayer.currentTime = 0;
}

function videoToggle() {
    if(videoPlayer.paused){
        playVideo();
    } else {
        pauseVideo();
    }  
}

function updateProgress() {
   const currentTime = videoPlayer.currentTime;
   const duration = videoPlayer.duration;
   progress.value = (currentTime / duration) * 100;
   timestamp.textContent = displayTime(currentTime);
   durationEl.textContent = displayTime(duration);
}

function displayTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    minutes = minutes > 9 ? minutes : `0${minutes}`;
    seconds = seconds > 9 ? seconds : `0${seconds}`;
    return `${minutes}:${seconds}`;
}

function setVideoProgress() {
    videoPlayer.currentTime = (+progress.value * videoPlayer.duration) / 100;
}

// Event Listeners
playBtn.addEventListener('click', videoToggle);
videoPlayer.addEventListener('click', videoToggle);
videoPlayer.addEventListener('timeupdate', updateProgress);
videoPlayer.addEventListener('ended', pauseVideo);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);