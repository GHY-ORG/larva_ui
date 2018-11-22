import React, { Component } from 'react';
import { Icon, Layout, Menu } from 'antd';
import { headerMenuConfig } from './../../../config/menuConfig';

export default class BasicHeader extends Component {
    render() {
        const { isMobile } = this.props;
        return (
            <Layout.Header style={{ background: '#fff', height: 45 }}>
                {headerMenuConfig && headerMenuConfig.length > 0 ? (
                    <Menu
                        mode="horizontal"
                        style={{ float: "right" }}
                    >
                        {headerMenuConfig.map((nav, idx) => {
                            const linkProps = {};
                            if (nav.newWindow) {
                                linkProps.href = nav.path;
                                linkProps.target = '_blank';
                            } else if (nav.external) {
                                linkProps.href = nav.path;
                            } else {
                                linkProps.to = nav.path;
                            }
                            return (
                                <Menu.Item key={idx} >
                                    {<a {...linkProps}>{nav.icon ? (<Icon type={nav.icon} size="small" />) : null}{!isMobile ? nav.name : null}</a>}
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                ) : null}
            </Layout.Header>
        );
    }
}