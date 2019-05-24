import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

// 1. Component definition
class SongList extends React.Component{
    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }
    render(){
        //console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// 2. Function that returns part of state (Redux store) as props to Component
const mapStateToProps = (state) => {
    //console.log(state);

    // Will show as props in our components
    return { songs: state.songs };
}

// 3. Expose props to Component by connect function
// Connect is a React Component that automatically calls dispatch function ever time
export default connect(mapStateToProps, {
    selectSong // same as selectSong: selectSong
})(SongList);