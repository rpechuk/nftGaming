import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import React, { Component } from 'react';

var ScrollAnim = require('rc-scroll-anim');
var ScrollParallax = ScrollAnim.Parallax;

class Demo extends Component{
  state = {
    show: true
  };
  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (
      <div className="queue-demo">
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>Switch</Button>
        </p>
        <QueueAnim className="demo-content">
          {this.state.show ? [
            <div className="demo-thead" key="a">
              <ul>
                <li />
                <li />
                <li />
              </ul>
            </div>,
            <div className="demo-tbody" key="b">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          ] : null}
        </QueueAnim>

        <ScrollParallax animation={{x:100}}>Parallax</ScrollParallax>
      </div>
    );
  }
};

export default Demo;
