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
      videos: [],
      selectedVideo: null
     };
    
    // Search YT w/ 'surfboards' query
    // then set this.state.videos equal to what comes in
    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    }, (videos) => {
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
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  // </Provider>
, document.querySelector('.container'));
