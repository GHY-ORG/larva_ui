import React, { Component } from 'react';
import { Card, Icon, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

export default class LatestComments extends Component {
    static displayName = 'LatestComments';

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
                <List
                    size="large"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />
            </Card>
        );
    }
}