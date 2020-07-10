import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from '../Video/Video';
import { Menu } from '../Menu/Menu';

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };
    this.chooseVideo = this.chooseVideo.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  chooseVideo(videoFormat) {
    this.setState({ src: VIDEOS[videoFormat] });
  }

  handleClick(e) {
    const text = e.target.value;
    this.chooseVideo(text);
  }
 
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.handleClick} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

export default App;
