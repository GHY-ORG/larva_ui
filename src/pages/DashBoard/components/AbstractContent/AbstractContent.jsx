import React, { Component } from 'react';
import { Card, List, Avatar, Divider } from 'antd';

const data = [
    {
        title: '文章统计',
        icon: 'book',
        describe: '',
        total: 153,
        add: 20,
    },
    {
        title: '标签统计',
        icon: 'tags',
        describe: '',
        total: 153,
        add: 20,
    },
    {
        title: '评论统计',
        icon: 'heart',
        describe: '',
        total: 153,
        add: 20,
    },
    {
        title: '文件统计',
        icon: 'file',
        describe: '',
        total: 153,
        add: 20,
    },
];
export default class AbstractContent extends Component {
    static displayName = 'AbstractContent';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <List
                    grid={{ gutter: 12, lg: 4, sm: 2, xs: 1 }}
                    dataSource={data}
                    style={{marginTop: 10}}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                bordered={false}
                                loading={false}
                            >
                                <Card.Meta
                                    avatar={<Avatar icon={item.icon} />}
                                    title={item.title}
                                />
                                总计：<strong>{item.total}</strong><Divider type="vertical" />新增：{item.add}
                            </Card>
                        </List.Item>
                    )}
                />
        );
    }
}