import React, {Component} from 'react';
import {Tabs} from 'antd';
import ReactMarkdown from 'react-markdown';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

require('codemirror/mode/markdown/markdown');

export default class MarkdownEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Tabs
                defaultActiveKey="1"
                animated={false}
            >
                <Tabs.TabPane tab="编辑" key="1">
                    <CodeMirror
                        options={{
                            mode: 'markdown',
                            theme: 'monokai',
                            lineWrapping: true,
                            lineNumbers: true,
                        }}
                        onChange={(editor, data, value) => {
                            this.setState({
                                editorContent: value
                            });
                        }}

                    />
                </Tabs.TabPane>
                <Tabs.TabPane tab="预览" key="2">
                    <ReactMarkdown
                        source={this.state.editorContent}
                        escapeHtml={false}
                    />
                </Tabs.TabPane>
            </Tabs>

        );
    }
}
