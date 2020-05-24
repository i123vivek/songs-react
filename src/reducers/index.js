import { combineReducers } from 'redux';

const songsReducer = () =>{
    return [
        { title: 'Dilwale', duration: '5:03'},
        { title: 'Sada Hak', duration: '4:04'},
        { title: 'Dil To Pagal Hai', duration: '4:06'},
        { title: 'Rangbaazi', duration: '2:03'},
        { title: 'Pardeshi', duration: '6:03'},
    ];
};


const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload.song;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})