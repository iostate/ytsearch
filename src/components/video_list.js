import React, { Component } from 'react';
import VideoListItem from './video_list_item';

/**
 * Generates multiple Video List Items. 
 * @param {} props - videos passed in from App.js
 */
const VideoList = (props) => {
	// generate multiple Video List Items using the map fn.
	const videoItems = props.videos.map( (video) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video} 
			/>
		);
	});

	// return multiple VideoListItems that are wrapped within a ul
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;