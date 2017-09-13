import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import EditPanel from './EditPanel/EditPanel'
import PlayerPanel from './PlayerPanel'

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              Flex css editor
              <iframe src="https://ghbtns.com/github-btn.html?user=limichange&repo=flex-abc&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>            
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <EditPanel />
                <PlayerPanel />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              ©2017 Created by <a target="_blank" href="https://github.com/limichange">Limichange</a>
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;