import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.getElementById('vimeo-player');
const player = new Player(videoEl);

const throttledTimeUpdate = throttle(seconds => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

player.on('timeupdate', function (data) {
  throttledTimeUpdate(data.seconds);
});

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime);
}
