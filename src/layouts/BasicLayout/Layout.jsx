import React, { Component } from 'react';
import { BackTop, Layout } from 'antd';
import BasicHeader from './components/BasicHeader'
import BasicSider from './components/BasicSider'
import BasicBreadcrumb from './components/BasicBreadcrumb'

export default class BasicLayout extends Component {
    render() {
        const { location } = this.props;
        const { pathname } = location;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <BasicSider path={pathname} />
                <Layout>
                    <BasicHeader />
                    <Layout.Content style={{ padding: '0 50px' }}>
                        <BasicBreadcrumb path={pathname} />
                        {this.props.children}
                    </Layout.Content>
                </Layout>
                <BackTop />
            </Layout>
        );
    }
}