import React, { Component } from 'react'
import { Layout } from 'antd'
import Sider from "../components/Sider"
import Editor from "../components/Editor"

export default class PostEdit extends Component {
    static displayName = 'PostEdit';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Layout style={{ background: '#fff' }}>
                <Sider />
                <Layout.Content  style={{ padding: 24 }}>
                    <Editor />
                </Layout.Content>
            </Layout>
        );
    }
}