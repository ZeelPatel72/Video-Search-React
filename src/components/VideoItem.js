import React from 'react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className="video-item item">
			<img className="ui image" alt="Thumbnail" src={video.snippet.thumbnails.medium.url} />

			<div className="content">
				<div className="header">{video.snippet.title}</div>
				<p className="description">{video.snippet.channelTitle}</p>
			</div>
		</div>
	)
}

export default VideoItem
