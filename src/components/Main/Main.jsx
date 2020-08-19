import React from 'react'
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';
import {Layout} from 'antd'
const {  Content } = Layout;

const Main = ()=>{

    return( <Content style={{ padding: '0 50px',height:'900px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">Content</div>
        </Content>
    )}

export default Main