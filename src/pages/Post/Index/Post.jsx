import React, { Component } from 'react'
import { Layout } from 'antd'
import Sider from "../components/Sider"

export default class Post extends Component {
    static displayName = 'Post';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Layout style={{ background: '#fff' }}>
                <Sider />
                <Layout.Content style={{ padding: 24 }}>
                    <div style={{ marginBottom: "1.2em", fontSize: "16px", textAlign: 'center', marginTop: '15vh' }}>
                        <p>光华园是一个家 我们从这里出发</p>
                        <p>痴痴说梦的人啊 远方就在脚下</p>
                        <p>无论原点还是终点</p>
                        <p>无法言说 GHY的力量</p>
                        <p>点滴相聚 微笑出发</p>
                        <p>与你同行 梦想终会到达</p>
                    </div>
                </Layout.Content>
            </Layout>
        );
    }
}