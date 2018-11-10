import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { siderMenuConfig } from './../../../config/menuConfig';

export default class BasicBreadcrumb extends Component {
    render() {
        const { path } = this.props;
        const pathSnippets = path.split('/').filter(i => i);
        const breadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            let breadcrumb = null;
            siderMenuConfig.forEach(function (item) {
                if (item.path === url) {
                    breadcrumb = item;
                }

                if (item.children) {
                    item.children.forEach(function (item) {
                        if (item.path === url) {
                            breadcrumb = item;
                        }
                    })
                }
            });
            if (breadcrumb) {
                return (
                    <Breadcrumb.Item key={url}>
                        {breadcrumb.disabled ?
                            <span><Icon type={breadcrumb.icon} />{breadcrumb.name}</span> :
                            <Link to={url}><span><Icon type={breadcrumb.icon} />{breadcrumb.name}</span></Link>
                        }
                    </Breadcrumb.Item>
                );
            }
            else {
                return (null);
            }
        });
        if (breadcrumbItems) {
            return (<Breadcrumb separator=">" style={{ margin: '16px 0' }}>{breadcrumbItems}</Breadcrumb>);
        }
        else {
            return (null);
        }
    }
}