const song = document.querySelector('.song');
const fill = document.querySelector('.fill');

function togglePlayPause(){
  if(song.paused){
    song.play();
    let playBtn = document.querySelector('.play-btn');
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  } else{
    song.pause();
    playBtn = document.querySelector('.play-btn');
    playBtn.innerHTML = '<i class="fa fa-play"></i>';
  }
}

song.addEventListener('timeupdate', function(){
  let position = song.currentTime / song.duration;
  fill.style.width = position * 100 + '%';
})