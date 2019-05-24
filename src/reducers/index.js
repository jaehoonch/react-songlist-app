import { combineReducers } from 'redux';

// Reducer 1
const songsReducer = () => {
   return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '2:030'},
        { title: 'All Star', duration: '3:15'},
        { title: 'I Want it That Way', duration: '1:45'}
   ];
};

// Reducer 2
const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})