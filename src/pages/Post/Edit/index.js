import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';

import Editor from "../Editor";

import GridContent from '@/components/PageHeaderWrapper/GridContent';
import PageLoading from '@/components/PageLoading';

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class PostEdit extends Component {
  state = {};

  componentDidMount() {
    const { dispatch } = this.props;
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
  }

  render() {
    return (
      <GridContent>
        <Suspense fallback={<PageLoading />}>
          <Editor />
        </Suspense>
      </GridContent>
    );
  }
}
export default PostEdit;
