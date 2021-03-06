import { useLocation } from "react-router-dom";
import React from "react";
import { Song } from "../Play/Play";
import MusicNotes from "../MusicNotes/MusicNotes";
import "./Results.css";
import { Link } from "react-router-dom";
interface ResultProps {
  score: number;
  songs: Song[];
}
const Results = () => {
  const location = useLocation();
  const props: any = location.state;
  return (
    <React.Fragment>
      <div className="result-bg">
        <div className="result-title">
          You Scored <text style={{ color: "skyblue" }}>{props.score}</text> out
          of {props.songs.length}
          <p> Here are the songs you played:</p>
          <table className="song-table">
            <tr id="table-header">
              <th> Album </th>
              <th> Song </th>
              <th> Artist </th>
            </tr>
            {props.songs.map((song: Song) => {
              return (
                <tr className="song-entry">
                  <th>
                    <img
                      alt="albumimg"
                      id="result-image"
                      src={song.albumImgUrl}
                    ></img>
                  </th>
                  <th>{song.songName}</th>
                  <th>{song.artist.join(", ")}</th>
                </tr>
              );
            })}
            <tr>
              <th></th>
              <Link to="/">
                <button className="btn"> BACK </button>
              </Link>
            </tr>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Results;
