import React, { Component } from 'react';
import { BackTop, Layout } from 'antd';
import BasicHeader from './components/BasicHeader'
import BasicBreadcrumb from './components/BasicBreadcrumb'

export default class BasicLayout extends Component {
    render() {
        const { location } = this.props;
        const { pathname } = location;
        return (
            <Layout>
                <BasicHeader path={pathname} />
                <Layout.Content style={{ padding: '0 28px' }}>
                    <BasicBreadcrumb path={pathname} />
                    {this.props.children}
                </Layout.Content>
                <Layout.Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Layout.Footer>
                <BackTop />
            </Layout>
        );
    }
}