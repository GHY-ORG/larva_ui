import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends PureComponent {
  render() {
    return (
      <div style={{ height: '32px', background: '#feb512', margin: '16px' }}>
        <Link to="/" className="logo-text" />
      </div>
    );
  }
}