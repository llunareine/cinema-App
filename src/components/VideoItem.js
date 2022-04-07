// Отображение видео-фильма
import React from 'react';
import './VideoItem.css';


const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                    <a className="header">{video.snippet.title}</a>
            </div>
            
        </div>
    ) 
}

export default VideoItem;