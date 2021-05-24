import { Parallax } from 'rc-scroll-anim';
import React, ReactDOM, { Component } from 'react';

class Demo extends Component {
  render() {
    return (
      <div >
        <Parallax
          animation={{ x: 0 }}
          style={{ transform: 'translateX(-100px)', margin: '10px auto' }}
          className="code-box-shape"
        />
        <Parallax
          animation={{ scale: 1 }}
          style={{ transform: 'scale(0)', margin: '10px auto' }}
          className="code-box-shape"
        />
        <Parallax
          animation={{ rotate: 360 }}
          style={{ margin: '10px auto' }}
          className="code-box-shape"
        />
      </div>
    );
  }
}
ReactDOM.render(<Demo/>, mountNode);

export default Demo;
