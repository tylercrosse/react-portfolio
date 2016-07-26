var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

var TestComponent = React.createClass({
  render: function () {
    return (
      <h1>Hello World!</h1>
    );
  }
});

ReactDOM.render(
  <TestComponent />,
  document.getElementById('app')
)

