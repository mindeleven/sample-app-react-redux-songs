import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Nile Waves', duration: '3:59' },
    { title: 'Beirut', duration: '10:51' },
    { title: 'Ya Ya Twist', duration: '4:12' },
    { title: 'Ya Rait Mennon', duration: '7:26' }
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
