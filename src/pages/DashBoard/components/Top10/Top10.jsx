import React, { Component } from 'react';
import { Card, Icon, Table } from 'antd';
import { Link } from 'react-router-dom';
import "./index.scss";

const dataSource = [
    {
        key: '1',
        website: 'http://ghy.swufe.edu.cn/',
        pv: 32,
        rate: '12.77%'
    },
    {
        key: '2',
        website: 'http://ghy.swufe.edu.cn/',
        pv: 32,
        rate: '12.77%'
    },
    {
        key: '3',
        website: 'http://ghy.swufe.edu.cn/',
        pv: 32,
        rate: '12.77%'
    },
    {
        key: '4',
        website: 'http://ghy.swufe.edu.cn/',
        pv: 32,
        rate: '12.77%'
    },
    {
        key: '5',
        website: 'http://ghy.swufe.edu.cn/',
        pv: 32,
        rate: '12.77%'
    },
    {
        key: '6',
        website: 'http://ghy.swufe.edu.cn/',
        pv: 32,
        rate: '12.77%'
    },
    {
        key: '7',
        website: 'http://ghy.swufe.edu.cn/',
        pv: 32,
        rate: '12.77%'
    },
    {
        key: '8',
        website: 'http://ghy.swufe.edu.cn/',
        pv: 32,
        rate: '12.77%'
    },
    {
        key: '9',
        website: 'http://ghy.swufe.edu.cn/',
        pv: 32,
        rate: '12.77%'
    },
    {
        key: '10',
        website: 'http://ghy.swufe.edu.cn/',
        pv: 32,
        rate: '12.77%'
    },
];

const columns = [
    {
        title: '受访网页',
        dataIndex: 'website',
        key: 'website',
        width: '70%',
        align: 'left',
        render: text => <a href={text} target="__blank">{text}</a>,
    }, {
        title: '浏览量',
        dataIndex: 'pv',
        key: 'pv',
        width: '15%',
        align: 'center'
    }, {
        title: '占比',
        dataIndex: 'rate',
        key: 'rate',
        width: '15%',
        align: 'center'
    }
];
export default class Top10 extends Component {
    static displayName = 'Top10';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card
                title="Top10受访页面"
                extra={<Link to="#"><Icon type="right" /></Link>}
                loading={false}
                style={{marginTop: 10, marginBottom: 10}}
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