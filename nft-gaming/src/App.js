import './App.css';
import Navbar from './Components/Navbar/navbar.js';
import Home from './Components/Homepage/index.js';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <div className="logo" />
          <Navbar />
        </Header>
        <Content style={{padding: '15px'}}>
          <Home />
        </Content>
        <Footer style={{ textAlign: 'center' }}>CryptoClips ©2021 Created by Ron and Ran</Footer>
      </Layout>
    </div>
  );
}

export default App;
