import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import routerConfig from '../../../config/routerConfig';

export default class BasicBreadcrumb extends Component {
    render() {
        let { path } = this.props;
        path = path.split('/').filter(i => i);
        const breadcrumbItems = path.map((_, index) => {
            const url = `/${path.slice(0, index + 1).join('/')}`;
            let item = null;
            for (let i = 0; i < routerConfig.length; i++) {
                if (url === routerConfig[i].path) {
                    item = routerConfig[i];
                    break;
                }
            }
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url} disabled={item.disabled}>
                        {item.icon ? (
                            <Icon size="small" type={item.icon} style={{ marginRight: "5px" }} />
                        ) : null}
                        <span>{item.name}</span>
                    </Link>
                </Breadcrumb.Item>
            );
        });
        if (breadcrumbItems) {
            return (
                <Breadcrumb
                    separator=">"
                    style={{ margin: '16px 0' }}
                >
                    {breadcrumbItems}
                </Breadcrumb>
            );
        }
    }
}