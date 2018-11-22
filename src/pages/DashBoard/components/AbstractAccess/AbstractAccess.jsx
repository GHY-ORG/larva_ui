import React, { Component } from 'react';
import { Card, Icon, List, Avatar, Divider, Tooltip } from 'antd';

const data = [
    {
        title: '浏览量（PV）',
        icon: 'eye',
        describe: '浏览量(PV)是指即通常说的Page View(PV)，用户每打开一个网站页面就被记录1次。用户多次打开同一页面，浏览量值累计。',
        prev: 2050,
        curr: 1080,
    },
    {
        title: '访客数（UV）',
        icon: 'user',
        describe: '访客数(UV)是指一天之内您网站的独立访客数(以Cookie为依据)，一天内同一访客多次访问您网站只计算1个访客。',
        prev: 505,
        curr: 201,
    },
    {
        title: '跳出率',
        icon: 'frown',
        describe: '跳出率是指只浏览了一个页面便离开了网站的访问次数占总的访问次数的百分比。',
        prev: "30%",
        curr: "31%",
    },
    {
        title: '平均访问时长',
        icon: 'clock-circle',
        describe: '平均访问时长是指访客在一次访问中，平均打开网站的时长。即每次访问中，打开第一个页面到关闭最后一个页面的平均值，打开一个页面时计算打开关闭的时间差。',
        prev: "02:58",
        curr: "06:58",
    },
];
export default class AbstractAccess extends Component {
    static displayName = 'AbstractAccess';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <List
                    grid={{ gutter: 12, lg: 4, sm: 2, xs: 1 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                bordered={false}
                                loading={false}
                            >
                                <Card.Meta
                                    avatar={<Avatar icon={item.icon} />}
                                    title={<span> {item.title} <Tooltip title={item.describe}> <Icon type="question-circle" /></Tooltip></span>}
                                />
                                今日：<strong>{item.curr}</strong><Divider type="vertical" />昨日：{item.prev}
                            </Card>
                        </List.Item>
                    )}
                />
        );
    }
}