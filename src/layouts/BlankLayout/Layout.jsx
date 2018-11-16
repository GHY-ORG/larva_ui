import React, { Component } from 'react';
import { Layout } from 'antd';

export default class BlankLayout extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Layout.Header>Header</Layout.Header>
                <Layout.Content>
                    {this.props.children}
                </Layout.Content>
                <Layout.Footer>fgd</Layout.Footer>
            </Layout>
        );
    }
}