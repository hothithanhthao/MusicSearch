import React from 'react';
import Axios from 'axios';

import apiKey from '../data/apis.json';

import { searchMusician } from '../redux/actions/searchMusicianAction';
import { addHistory } from '../redux/actions/addHistoryAction';

import { store } from '../redux/createStore';


class Lookup extends React.Component {
  constructor() {
    super();

    this.state = {
      artist: ''
    };

    this.onArtistChangeHandler = this.onArtistChangeHandler.bind(this);
    this.onArtistSearchHandler = this.onArtistSearchHandler.bind(this);
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.artist !== nextState.artist) return true;

    return false;
  }
  
  render() {
    return (
      <div className="lookup">

        <span className="lookup-description">Search musician:</span>

        <input className="lookup-bar"
               type="text" 
               placeholder="SEARCH..."
               value={this.state.artist} 
               onChange={this.onArtistChangeHandler} 
               onKeyDown={this.onKeyDownHandler} />

        <button className="lookup-button"
                onClick={this.onArtistSearchHandler}>
          Search!
        </button>
      </div>
      );
    }
    
    onArtistChangeHandler(e) {
      this.setState({
        artist: e.target.value
      });
    }
  
    onKeyDownHandler(e) {
      if(e.keyCode === 13) {
        e.preventDefault();
        this.onArtistSearchHandler();
      }
    }
  
    onArtistSearchHandler() {
      if(!this.state.artist)
        return;
  
      const searchTerm = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.state.artist}&api_key=${apiKey.lastfm}&format=json`;

      Axios.get(searchTerm)
           .then(data => {
             if(data.status !== 200) {
               console.error('Something went wrong! Status:', data.status, data.statusText);
             }
             else {
               const results = data.data.results.artistmatches.artist;
               store.dispatch(searchMusician(this.state.artist, results));
               store.dispatch(addHistory({
                 searchTerm: this.state.artist,
                 results
               }));
             }
           })
           .catch(exc => {
             console.error(exc.message);
      });
    }    
}

export default Lookup;