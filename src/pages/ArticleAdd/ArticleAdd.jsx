import React, {Component} from 'react';
import MarkdownEditor from '../../components/MarkdownEditor';

export default class ArticleAdd extends Component {
    static displayName = 'ArticleAdd';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (<div><MarkdownEditor/></div>);
    }
}
