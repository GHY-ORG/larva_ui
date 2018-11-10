import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends PureComponent {
  render() {
    return (
      <div style={{ height: '32px', background: 'rgba(255, 255, 255, .2)', margin: '16px' }}>
        <Link to="/" className="logo-text" />
      </div>
    );
  }
}