/**
 * Author: 笑翟 <gindis.wx>
 * entry javascript
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class ExampleApplication extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    var message =
      'React has been successfully running for ' + seconds + ' seconds.';
    return (
      <div>
        <p>hello world!</p>
        <p>{message}</p>
      </div>
    );
  }

}

const start = new Date().getTime();

setInterval(function() {
  ReactDOM.render(
    <ExampleApplication elapsed={new Date().getTime() - start} />,
    document.getElementById('container')
  );
}, 50);
