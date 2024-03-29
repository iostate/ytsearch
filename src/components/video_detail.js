import React from 'react';


const VideoDetail = ( {video} ) => {

	if (!video) {
		return <div>Loading...</div>;
	}
	// our own embed url
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}>
				</iframe>
			</div>
			<div className="details">
				<div name="title">{video.snippet.title}</div>
				<div
				 name="description">{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;

