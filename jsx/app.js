var React = require('react'),
    injectTapEventPlugin = require('react-tap-event-plugin'),
    Main = require('./components/main.js');

window.React = React;
injectTapEventPlugin();

React.render(<Main />, document.body);
