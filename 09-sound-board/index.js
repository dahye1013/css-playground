const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();
    document.getElementById(sound).play(); // play -> audio element method
  });

  document.getElementById('buttons').appendChild(btn);
});

//If something's playing, others should be stop
function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
    // audio tags have a property of current time -> should reset to zero
    song.currentTime = 0;
  });
}
