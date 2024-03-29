import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
/* 	the syntax ({video, onVideoSelect}) is equivalent to saying the following:
	const video = props.video
	const onVideoSelect = props.onVideoSelect 
*/

	const imageUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;

	return (	
		<li 
			onClick={ () => onVideoSelect(video) }		
			className="list-group-item"
		>
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">
					{title}
					</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;