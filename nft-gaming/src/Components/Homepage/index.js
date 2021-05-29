import {
  Steps,
  Divider,
  Carousel,
  Pagination,
  Popover,
  Button,
  Tabs,
} from 'antd';
import React, { Component } from 'react';

const { Step } = Steps;
const { TabPane } = Tabs;


const carouselStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '300px',
  float: 'center',
  textAlign: 'center',
  background: '#61892f',
};

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

function callback(key) {
  console.log(key);
}

class Home extends Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <>
        <Steps current={current} onChange={this.onChange} direction="vertical">
          <Step title="Sign Up!" description="Sign up for CryptoClips using your email of choice!" />
          <Step title="Purchase Crate!" description="Get your first crate and open it to see what clip you role!" />
          <Step title="Show off!" description="Show off all of the clips you opened in your collection page." />
        </Steps>
        <Divider />
        <Carousel autoplay style={{width: '300px'}}>
          <div>
            <h3 style={carouselStyle}>1</h3>
          </div>
          <div>
            <h3 style={carouselStyle}>2</h3>
          </div>
          <div>
            <h3 style={carouselStyle}>3</h3>
          </div>
          <div>
            <h3 style={carouselStyle}>4</h3>
          </div>
        </Carousel>
        <Divider />
        <br></br>
        <br></br>
        <Popover content={content} title="Title">
            <Button type="primary">Hover me</Button>
        </Popover>
        <br></br>
        <br></br>
        <Divider />
        <Tabs onChange={callback} type="card">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <br></br>
        <br></br>
        <Divider />

        <Pagination defaultCurrent={1} total={50} />
      </>
    );
  }
};

export default Home;
