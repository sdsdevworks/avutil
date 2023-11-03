const videoPlayer = document.getElementById('video-player');
const playlist = document.getElementById('playlist');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentVideoIndex = 0;



// Add an event listener to the video element to loop the video

videoPlayer.addEventListener('ended', () => {
//    videoPlayer.play();
playNextVideo();
});


playlist.addEventListener('click', playVideo);

function playVideo(event) {
    if (event.target.tagName === 'LI') {
        const videoSource = event.target.getAttribute('data-src');
        videoPlayer.src = videoSource;
        videoPlayer.load();
        videoPlayer.play();
    }
}



prevButton.addEventListener('click', playPreviousVideo);
nextButton.addEventListener('click', playNextVideo);


function playPreviousVideo() {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        playCurrentVideo();
    }
}

function playNextVideo() {
    if (currentVideoIndex < playlist.children.length - 1) {
        currentVideoIndex++;
        playCurrentVideo();
        return;
    
    }
    if (currentVideoIndex == playlist.children.length - 1) {
        currentVideoIndex=0;
        playCurrentVideo();
    }
}

function playCurrentVideo() {
    const selectedVideo = playlist.children[currentVideoIndex];
    const videoSource = selectedVideo.getAttribute('data-src');
    videoPlayer.src = videoSource;
    videoPlayer.load();
    videoPlayer.play();
}

// Initialize with the first video in the playlist
playCurrentVideo();





