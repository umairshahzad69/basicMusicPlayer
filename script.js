let songsArr = [
    {
        name: "Lil Mama See",
        image: "https://pagalnew.com/coverimages/Lil-Mama-See-feat.-Sultaan-Road-Runner-500-500.jpg",
        songUrl: "./songs/Lil Mama See Road Runner 128 Kbps.mp3"
    },
    {
        name: "Play Date",
        image: "https://pagalnew.com/coverimages/Play-Date-Lilly-Brooks-500-500.jpg",
        songUrl: "./songs/Play Date Mp3 Song - Lilly Brooks 2021 Mp3 Songs Free Download.mp3"
    },
    {
        name: "Go Down Deh",
        image: "https://pagalnew.com/coverimages/Go-Down-Deh-feat.-Shaggy-and-Sean-Paul-Spice-500-500.jpg",
        songUrl: "./songs/Go Down Deh Mp3 Song - Spice 2021 Mp3 Songs Free Download.mp3"
    },
    
]
var audio = new Audio();
var selectedSong = 0;
var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");
function mainfunction(){
    let clutter = '';
    songsArr.forEach((song, index)=>{
        clutter+=`<div class="song-card" id=${index}>
        <div class="part1">
            <img src=${song.image} alt="">
            <h2>${song.name}</h2>
        </div>
        <h6>3:56</h6>
    </div>`
    })
    allSongs.innerHTML=clutter;
    audio.src = songsArr[selectedSong].songUrl;
    poster.style.backgroundImage = `url(${songsArr[selectedSong].image})`
    
}

mainfunction();
allSongs.addEventListener("click", function(details){
    // console.log(songsArr[details.target.id].songUrl);
    selectedSong = details.target.id;
    forward.style.opacity = 1;
    mainfunction();
    audio.play();
    play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
    flag = 1;
})
var flag = 0;
play.addEventListener("click", function(){
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
        audio.play();
        flag=1;
    }
    else{
        play.innerHTML=`<i class="ri-play-mini-fill"></i>`
        audio.pause();      
        flag=0;
    }
})

forward.addEventListener("click", function(){
    // console.log(selectedSong);
    if(selectedSong < songsArr.length - 1){
        forward.style.opacity = 1;
        selectedSong++;
        mainfunction();
        audio.play();
        backward.style.opacity = 1;
    }
    else{
        forward.style.opacity = 0.4;
        backward.style.opacity = 1;
    }
})

backward.addEventListener("click", function(){
    if(selectedSong > 0){
        backward.style.opacity = 1;
        selectedSong--;
        mainfunction();
        audio.play();
        forward.style.opacity = 1;
        
    }
    else{
        backward.style.opacity = 0.4;
        forward.style.opacity = 1;
    }
})