import _ from 'lodash'; // used for throttling the searches
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'; // the YouTube API Search
import SearchBar from './components/search_bar'; // Search Bar Component that lets us search YT data
import VideoList from './components/video_list'; // Renders a list of Videos
import VideoDetail from './components/video_detail'; // Renders the details of videos within the VideoList component

// API key for YouTube Search
const API_KEY = 'AIzaSyAi-0d84t5z3ewvHms9alUaYjRuo_YfQBE';

/*
// Currently not being used until redux is implemented
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'; 
const createStoreWithMiddleware = applyMiddleware()(createStore);
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [], // empty array of videos to be populated with videoSearch() fn
      selectedVideo: null // selectedVideo will render the 1st video of the videos
                          // returned by videoSearch() fn
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
    // throttle the video searches
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    
    return (
      <div>
        
        {/* The onSearchTermChange is throttled by lodash, by 300ms */}
        <SearchBar onSearchTermChange={videoSearch} />
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
  // Provider currently not being used until Redux is implemented
  // <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  // </Provider>
, document.querySelector('.container'));
