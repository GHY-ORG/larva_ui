import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/table.css'

import React, { Component } from 'react'
import BraftEditor from 'braft-editor'
import Table from 'braft-extensions/dist/table'
import Markdown from 'braft-extensions/dist/markdown'

const options = {
    defaultColumns: 3,
    defaultRows: 3
}
BraftEditor.use(Markdown())
BraftEditor.use(Table(options))

export default class Editor extends Component {
    state = {
        editorState: BraftEditor.createEditorState()
    }

    handleChange = (editorState) => {
        this.setState({ editorState })
    }

    preview = () => {
        if (window.previewWindow) {
            window.previewWindow.close()
        }
        window.previewWindow = window.open()
        window.previewWindow.document.write(this.buildPreviewHtml())
        window.previewWindow.document.close()
    }

    buildPreviewHtml() {
        return `
            <!Doctype html>
            <html>
                <head>
                    <title>Preview Content</title>
                </head>
                <body>
                    <div class="container">${this.state.editorState.toHTML()}</div>
                </body>
            </html>
            `
    }
    render() {
        return (
            <div className="editor-wrapper">
                <BraftEditor
                    textAligns={['left', 'center', 'right']}
                    controls={['headings', 'bold', 'italic', 'strike-through', 'list-ul', 'list-ol', 'blockquote', 'text-align', 'link', 'emoji', 'media', 'table']}
                    contentStyle={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }}
                    placeholder="请输入正文内容"
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}