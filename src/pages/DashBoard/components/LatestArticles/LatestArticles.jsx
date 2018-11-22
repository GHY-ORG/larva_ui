import React, { Component } from 'react';
import { Card, Icon, Table, Divider } from 'antd';
import { Link } from 'react-router-dom';

const dataSource = [
    {
        key: '1',
        title: '丹青言志 翰墨寄情—— 庆祝改革开放暨学校复校40周年师生书画摄影展开幕',
        author: '西财新闻',
        date: '2018-11-21',
        state: '等待审核',
    },
    {
        key: '2',
        title: '丹青言志 翰墨寄情—— 庆祝改革开放暨学校复校40周年师生书画摄影展开幕',
        author: '西财新闻',
        date: '2018-11-21',
        state: '等待审核',
    },
    {
        key: '3',
        title: '丹青言志 翰墨寄情—— 庆祝改革开放暨学校复校40周年师生书画摄影展开幕',
        author: '西财新闻',
        date: '2018-11-21',
        state: '等待审核',
    },
    {
        key: '4',
        title: '丹青言志 翰墨寄情—— 庆祝改革开放暨学校复校40周年师生书画摄影展开幕',
        author: '西财新闻',
        date: '2018-11-21',
        state: '等待审核',
    },
];

const columns = [
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="/">编辑</a>
                <Divider type="vertical" />
                <a href="/">删除</a>
            </span>
        ),
    }
];
export default class LatestArticles extends Component {
    static displayName = 'LatestArticles';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card
                title="最新评论"
                extra={<Link to="#"><Icon type="right" /></Link>}
                loading={false}
                style={{ marginTop: 10, marginBottom: 10 }}
            >
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                />
            </Card>
        );
    }
}