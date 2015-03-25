var React = require('react'),
    injectTapEventPlugin = require('react-tap-event-plugin'),
    Toolbar = require('./components/toolbar'),
    Main = require('./components/main.js');

window.React = React;
injectTapEventPlugin();

var Wrapper = React.createClass({
    render: function() {
        return (
            <div id="wrapper">
                <Toolbar />
                <Main />
            </div>
        );
    }
});

React.render(<Wrapper />, document.body);
