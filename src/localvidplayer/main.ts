function initializePlayer() {
    console.log ("initPlayer");
    initializePlaylist();
    initializePlayerControls();
}


function initializePlaylist() {

    console.log ("init-Playlist");

        const playList = document.getElementById("playlist") as HTMLUListElement;
//        const jsonUrl = "videos/playlist.json"; // Replace with your JSON URL
        const jsonUrl = "https://raw.githubusercontent.com/sdsdevworks/avutil/main/src/basicvidplayer/test.json"; // Replace with your JSON URL

    
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((data) => {
                // Clear the existing list items
                playList.innerHTML = "";
                console.log ("Load2");
                // Create list items from the JSON data
                data.forEach((item: { name: string, videoURL: string, runtime: string }) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = item.name + " (" + item.runtime +")";
                    listItem.setAttribute("vidURL", item.videoURL); 
                    playList.appendChild(listItem);
                });
            })
            .catch((error) => {
                console.error("Error loading JSON:", error);
            });

}

function initializePlayerControls() {

    console.log ("init-PlayerCOntrols");
    let currentVideoIndex = 0;
    const playList = document.getElementById("playlist") as HTMLUListElement;    
//    const videoPlayer = document.getElementById('video-player');
//    const loopCheck = document.getElementById('loop-check');
const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

prevButton.addEventListener('click', playPreviousVideo);
nextButton.addEventListener('click', playNextVideo);


    function playPreviousVideo() {
        console.log ("playPreviousVideo");
        if (currentVideoIndex > 0) {
            currentVideoIndex--;
//            playCurrentVideo();
        }
    }

    function playNextVideo() {
        console.log ("playNextVideo");
        if (currentVideoIndex < playList.children.length - 1) {
            currentVideoIndex++;
  //          playCurrentVideo();
            return;
        
        }
        if (currentVideoIndex == playList.children.length - 1) {
            currentVideoIndex=0;
 //           playCurrentVideo();
        }
    }




    playList.addEventListener('click', playVideo);

    function playVideo(event) {
        console.log ("playVideo");
        if (event.target.tagName === 'LI') {
            const videoSource = event.target.getAttribute('vidURL');
            console.log ("playVideo:"+videoSource);
            //           videoPlayer.src = videoSource;
 //           videoPlayer.load();
 //           videoPlayer.play();
        }
    }    

}

