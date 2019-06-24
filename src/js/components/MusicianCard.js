import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "@babel/polyfill";
import ShowText from './ShowText.js'

import apiKey from '../data/apis.json';

const MusicianCard = (props) => {
  //Initial State 
  const initialMusicianState = {
    musician: {},
    loading: true,
  }

  const [musician, setMusician] = useState(initialMusicianState)

  // use useEffect to fetch data from lastfm to get artist info
  useEffect(() => {
    const getMusician = async () => {
      const { data } = await axios(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${props.match.params.name}&api_key=${apiKey.lastfm}&format=json`)

      setMusician(data)
    }
    getMusician()
  }, [])

  return musician.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="musiciancard">
      <h1>{props.match.params.name}</h1>
      <div className="musiciancard-content">
      <h2>Summary</h2>
        <ShowText
          className="musiciancard-content-bio"
          text={musician.artist.bio.content}
          maxLength={500}
        />
        <div className="musiciancard-tag-content">
          {musician.artist.tags.tag.map((e,i) => (
            <span className="musiciancard-tag" key={i} href={e.url}>{"#"}{e.name}{" "}</span>
          ))}
        </div>
        <h4>Recommended similar Artists for you</h4> 
        <div id="my-unique-id-in-this-page">
          {musician.artist.similar.artist.map((e,i) => (
            <a className="musiciancard-artist" key={i} href={e.url}>{e.name}{" "}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MusicianCard;