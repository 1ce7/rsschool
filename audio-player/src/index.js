const audio = new Audio();
const audios = [
  {
    name: "Chollima On The Wing!",
    author: "Pochonbo Electronic Ensemble",
    src: "src/assets/audio/Cholima.mp3",
    cover: "src/assets/img/maxresdefault.jpg",
    duration: 162.437378,
  },
  {
    name: "Stirb Nicht Vor Mir",
    author: "Rammstein (feat.Sharleen Spiteri)",
    src: "src/assets/audio/Rammstein - Stirb Nicht Vor Mir (feat. Sharleen Spiteri).mp3",
    cover: "src/assets/img/strib.jpg",
    duration: 247.405714,
  },
  {
    name: "Don't start now",
    author: "Dua Lipa",
    src: "src/assets/audio/dontstartnow.mp3",
    cover: "src/assets/img/dontstartnow.png",
    duration: 203.389388,
  },
  {
    name: "Lemonade",
    author: "Beyonce",
    src: "src/assets/audio/beyonce.mp3",
    cover: "src/assets/img/lemonade.png",
    duration: 233.717551,
  },
  {
    name: "Green Fields",
    author: "The Brothers Four",
    src: "src/assets/audio/The Brothers Four - Green Fields.mp3",
    cover: "src/assets/img/tbf.jpg",
    duration: 186.331429,
  },
  {
    name: "Пройдет еще два года",
    author: "ДК",
    src: "src/assets/audio/Пройдет еще два года.mp3",
    cover: "src/assets/img/DK.jpg",
    duration: 157.022041,
  },
]

function renderAudioList(audios, parentElement) {
  const audioList = document.createElement("ul");
  audioList.classList.add('audio-player__audio-list');
  audios.forEach((audio, index) => {
    const audioListItem = document.createElement("li");
    audioListItem.classList.add('audio-player__audio-list-item');
    const audioListName = document.createElement('span');
    audioListName.classList.add('audio-player__audio-list-item-name');
    const audioListTime = document.createElement('span');
    audioListTime.classList.add('audio-player__audio-list-item-time');
    if (index === 0) {
      audioListItem.classList.add('active-audio-info');
    }
    audioListName.innerText = `${audio.name} - ${audio.author}`;
    audioListItem.appendChild(audioListName);
    audioListTime.innerText = toMinutes(audio.duration);
    audioListItem.appendChild(audioListTime);
    audioList.appendChild(audioListItem);
  });
  parentElement.appendChild(audioList);
}
const audioInfo = document.querySelector('.audio-player__audio-info');
renderAudioList(audios, audioInfo);

const audioListItems = document.querySelectorAll(".audio-player__audio-list-item");
const audioPlayer = document.querySelector(".audio-player");
const playBtn = document.querySelector(".play-button");
const nextBtn = document.querySelector(".next-button");
const prevBtn = document.querySelector(".prev-button");
const volumeBtn = document.querySelector(".volume-button");
const repeatBtn = document.querySelector(".repeat-button");
const shuffleBtn = document.querySelector(".shuffle-button");
const audioName = document.querySelector(".audio-player__audio-name");
const audioImage = document.querySelector('.audio-player__audio-image img');
const audioListTimes = document.querySelectorAll('.audio-player__audio-list-item-time');
const audioListNames = document.querySelectorAll('.audio-player__audio-list-item-name');
const audioCurrentTimeline = document.querySelector('.audio-player__audio-current-timeline');
const audioTimeline = document.querySelector('.audio-player__audio-timeline');
const audioTimelineBox = document.querySelector('.audio-player__audio-timeline-box');
const audioCurrentVolume = document.querySelector('.audio-player__audio-current-volume');
const audioVolume = document.querySelector('.audio-player__audio-volume');
const audioVolumeBox = document.querySelector('.audio-player__audio-volume-box');
const audioTimelineSlider = document.querySelector('.audio-player__audio-current-timeline .audio-player__progress-bar-slider')
const audioVolumeSlider = document.querySelector('.audio-player__audio-current-volume .audio-player__progress-bar-slider')

let currIndex = 0;
let shuffledAudios = [...audios];
let isShuffle = false;
let isPlaying = false;
let playingTime = 0;
let currAudio = shuffledAudios[currIndex];
audio.src = shuffledAudios[currIndex].src;
audio.volume = 0.5;


function toMinutes(seconds) {
  return `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')}:${Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0')}`;
}
function playAudio() {
  if (!isPlaying) {
    if (audio.volume == 0) {
      audio.volume = 0.5;
    }
    audio.src = shuffledAudios[currIndex].src;
    audio.currentTime = playingTime;
    audio.play();
    currAudio = shuffledAudios[currIndex];
    isPlaying = true;
  } else {
    playingTime = audio.currentTime;
    audio.pause();
    isPlaying = false;
  }
}
function playNext() {
  playingTime = 0;
  currIndex++;
  if (currIndex >= audios.length) {
    currIndex = 0;
  }
  isPlaying = false;
  playAudio();
}
function playPrev() {
  if (isPlaying && audio.currentTime > 5) {
    playingTime = 0;
  } else {
    playingTime = 0;
    currIndex--;
    if (currIndex < 0) {
      currIndex = audios.length - 1;
    }
  }
  isPlaying = false;
  playAudio();
}
function changeIcon(iconEl, from, to) {
  iconEl.getAttribute('href') === from ? iconEl.setAttribute('href', to) : iconEl.setAttribute('href', from);
}
function shuffleArray(arr) {
  const shuffledArr = [...arr]; // Создаем копию исходного массива
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Генерируем случайный индекс от 0 до i
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]]; // Меняем местами элементы
  }
  return shuffledArr;
}
function updateAudioInfo() {
  shuffledAudios.forEach((audio, index) => {
    audioListNames[index].innerText = `${audio.name} - ${audio.author}`;
    if (audio !== currAudio) {
      audioListTimes[index].innerText = toMinutes(audio.duration);
    }
  });
  audioListItems.forEach((item) => {
    item.classList.remove('active-audio-info');
  });
  audioListItems[currIndex].classList.add('active-audio-info'); // вынести в функцию
  audioPlayer.style.backgroundImage = `url(${currAudio.cover})`;
  audioImage.setAttribute('src', currAudio.cover);
  audioName.innerText = currAudio.name;
}

playBtn.addEventListener("click", (event) => {
  playAudio();
  let btnIcon = event.currentTarget.children[0].children[0];
  changeIcon(btnIcon, '#play', '#pause');
});
nextBtn.addEventListener("click", () => {
  playNext();
  playBtn.children[0].children[0].setAttribute('href', '#pause');
});
prevBtn.addEventListener("click", () => {
  playPrev();
  playBtn.children[0].children[0].setAttribute('href', '#pause');
});
volumeBtn.addEventListener("click", (event) => {
  let btnIcon = event.currentTarget.children[0].children[0];
  changeIcon(btnIcon, '#volume', '#mute');
  audio.muted = !audio.muted;
});
repeatBtn.addEventListener("click", (event) => {
  let btnIcon = event.currentTarget.children[0].children[0];
  changeIcon(btnIcon, '#repeat', '#repeatOne')
  audio.loop = !audio.loop;
});
shuffleBtn.addEventListener("click", () => {
    isShuffle = false;
    [shuffledAudios[0], shuffledAudios[currIndex]] = [shuffledAudios[currIndex], shuffledAudios[0]];
    let shuffledPart = shuffledAudios.slice(1);
    while (!isShuffle) {
      shuffledPart = shuffleArray(shuffledPart);
      for (let i = 1; i < audios.length; i++) {
        if (audios[i].name !== shuffledPart[i - 1].name) {
          isShuffle = true;
          break;
        }
      }
    }
    currIndex = 0;
    shuffledAudios = [shuffledAudios[0], ...shuffledPart];
    console.log(shuffledAudios);
    updateAudioInfo()
});
audio.addEventListener('play', () => {
  updateAudioInfo()
});
audio.addEventListener("ended", () => {
  audio.loop ? (audio.currentTime = 0, audio.play()) : playNext();
});
audio.addEventListener('timeupdate', () => {
  audioListItems[currIndex].querySelector('.audio-player__audio-list-item-time').innerText = toMinutes(audio.currentTime);
  audioCurrentTimeline.style.width = audio.currentTime / audio.duration * 100 + '%';
});

audioTimelineBox.addEventListener('click', (event) => {
  isPlaying = true;
  playBtn.children[0].children[0].setAttribute('href', '#pause');
  audio.play();
  const timelineWidth = audioTimeline.offsetWidth;
  const clickX = event.clientX - audioTimeline.offsetLeft;
  audio.currentTime = (clickX / timelineWidth) * audio.duration;
});
let timelineSliderIsDragging = false;
audioTimelineSlider.addEventListener('mousedown', (event) => {
  timelineSliderIsDragging = true;
});
document.addEventListener('mousemove', (event) => {
  if (timelineSliderIsDragging) {
    const timelineWidth = audioTimeline.offsetWidth;
    const clickX = event.clientX - audioTimeline.offsetLeft;
    audio.currentTime = (clickX / timelineWidth) * audio.duration;
  }
});
document.addEventListener('mouseup', () => {
  timelineSliderIsDragging = false;
});

audio.addEventListener('volumechange', () => {
  audioCurrentVolume.style.height = audio.volume * 100 + '%';
});
audioVolumeBox.addEventListener('click', (event) => {
  const volumeHeight = audioVolume.offsetHeight;
  const clickY = volumeHeight - (event.clientY - audioVolume.offsetTop);
  audio.volume = clickY / volumeHeight;
});
let volumeSliderIsDragging = false;
audioVolumeSlider.addEventListener('mousedown', (event) => {
  volumeSliderIsDragging = true;
});
document.addEventListener('mousemove', (event) => {
  if (volumeSliderIsDragging) {
    const volumeHeight = audioVolume.offsetHeight;
    const clickY = volumeHeight - (event.clientY - audioVolume.offsetTop);
    audio.volume = clickY / volumeHeight;
  }
});
document.addEventListener('mouseup', () => {
  volumeSliderIsDragging = false;
});
