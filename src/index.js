import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import reducers from './reducers';

// import App from './components/app';

const API_KEY = 'AIzaSyAi-0d84t5z3ewvHms9alUaYjRuo_YfQBE';
const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  constructor(props) {
    super(props);


    this.state = { 
      videos: [], // empty array of videos to be populated with YTSearch
      selectedVideo: null // selectedVideo will render the video in the Video Player
     };
    //  Initialize YTSearch term to 'surfboards'
     this.videoSearch('surfboards');
  }

  /**
      Search the YouTube API w/ any term, use the videos response 
      from the YouTube API to set the state.videos
      property, amd also to initialize the selectedVideo as the first index of the videos. 
     */
  videoSearch(term) { 
    YTSearch({key: API_KEY, term: term }, (videos) => {
      // when the name of the data and the state property is the same
      // simply use the name of either
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); 
    });

  }

  render() {
    return (
      <div>
        {/* 
          onSearchTermChange will automatically render a new search
          through YouTube Search, it will also update state.videos & state.SelectedVideo 
        */}
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        {/* 
          Initialize the VideoDetail with the first video from the YTSearch. 
          Any onClicks to videos in the VideoList will automatically rerender this component 
        */}
        <VideoDetail video={this.state.selectedVideo} />
        {/* onVideoSelect() in VideosList allows us to update VideoDetail component
            since calls to setState() automatically rerenders the VideoDetail component */}
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  // </Provider>
, document.querySelector('.container'));
