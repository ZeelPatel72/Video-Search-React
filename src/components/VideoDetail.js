import React from 'react'

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
	return (
		<div className="ui segment">
			<div className="ui embed">
				<iframe src={videoSrc} title="Video Player"></iframe>
			</div>
			<div>
				<p></p>
				<h4 className="ui header">{video.snippet.title}</h4>
				<p className="des">{video.snippet.description}</p>

				<p className="description">By {video.snippet.channelTitle}</p>
			</div>
		</div>
	)
}

export default VideoDetail
