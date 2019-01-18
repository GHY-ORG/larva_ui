import React, { Component } from 'react';
import { Layout, Menu, Tooltip, Icon } from 'antd';

const aboards = [
    {
        aboardId: 1,
        aboardName: "光华园首页",
        description: "此情可待成追忆？只是当时已惘然。",
        categories: [
            {
                categoryId: 1,
                categoryName: "顶部Banner",
                description: "人生若只如初见，何事秋风悲画扇？"
            }
        ]
    }
]
export default class Sider extends Component {

    render() {
        return (
            <Layout.Sider
                width={200}
                style={{ background: '#fff', minHeight: '75vh' }}
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div style={{ margin: "15px 0 0 0", padding: "0 20px", fontSize: 16, fontWeight: 500 }}>
                    <Icon type="appstore" style={{ marginRight: "5px" }} />
                    <span>板块</span>
                </div>
                <Menu
                    mode="inline"
                    style={{ height: '100%' }}
                >
                    {aboards && aboards.length > 0 && aboards.map((item) => {
                        if (item.categories && item.categories.length > 0) {
                            return (
                                <Menu.SubMenu
                                    key={item.aboardId}
                                    title={
                                        <Tooltip title={item.description}>
                                            <span>{item.aboardName}</span>
                                        </Tooltip>
                                    }
                                >
                                    {item.categories.map((item) => {
                                        return (
                                            <Menu.Item
                                                key={item.categoryId}
                                                onClick={console.log(item.description)}
                                            >
                                                <Tooltip title={item.description}>
                                                    <span>{item.categoryName}</span>
                                                </Tooltip>
                                            </Menu.Item>
                                        );
                                    })}
                                </Menu.SubMenu>
                            );
                        }
                        return (
                            <Menu.Item key={item.aboardId}>
                                <Tooltip title={item.description}>
                                    <span>{item.aboardName}</span>
                                </Tooltip>
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </Layout.Sider>
        );
    }
}