import React from 'react';
import './App.css';
import Main from "./components/Main/Main";
import { Layout} from 'antd';
import Top from "./components/Header/Header";
import Bottom from "./components/Footer/Footer";
const App=() =>{
  return (
      <Layout className="layout">
      <Top/>
      <Main/>
      <Bottom/>
      </Layout>
  );
}

export default App;
