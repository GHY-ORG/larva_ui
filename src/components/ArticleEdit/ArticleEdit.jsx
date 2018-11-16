import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
class iArticleEdit extends Component {
    render() {

        return (
            <Form>

            </Form>
        );
    }
}


export default class ArticleEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const WrappedArticleEdit = Form.create(iArticleEdit);
        return (
            <WrappedArticleEdit />
        );
    }

}