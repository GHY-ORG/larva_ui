import React, { Component } from 'react';
import { Row, Col } from 'antd';
import AbstractAccess from './components/AbstractAccess';
import Trend from './components/Trend';
import Top10 from './components/Top10';
import AbstractContent from './components/AbstractContent';
import LatestComments from './components/LatestComments';
import LatestArticles from './components/LatestArticles';

export default class DashBoard extends Component {
    static displayName = 'DashBoard';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <AbstractAccess />
                <Row type="flex" justify="space-around" gutter={16}>
                    <Col md={12} sm={24}>
                        <Trend />
                    </Col>
                    <Col md={12} sm={24}>
                        <Top10 />
                    </Col>
                </Row>
                <AbstractContent />
                <Row type="flex" justify="space-around" gutter={16}>
                    <Col md={12} sm={24}>
                        <LatestArticles />
                    </Col>
                    <Col md={12} sm={24}>
                        <LatestComments />
                    </Col>
                </Row>
            </div>
        );
    }
}