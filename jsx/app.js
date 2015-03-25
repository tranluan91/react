var React = require('react'),
    injectTapEventPlugin = require('react-tap-event-plugin'),
    Toolbar = require('./components/toolbar'),
    Dashboard = require('./components/dashboard'),
    Inbox = require('./components/inbox'),
    Main = require('./components/main');

var Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

window.React = React;
injectTapEventPlugin();

var Wrapper = React.createClass({
    render: function() {
        return (
            <div id="wrapper">
                <Toolbar />
                <RouteHandler />
            </div>
        );
    }
});


var routes = (
    <Route name="index" path="/" handler={Wrapper}>
        <Route name="dashboard" handler={Dashboard} />
        <Route name="inbox" handler={Inbox} />
        <DefaultRoute handler={Main} />
    </Route>
);

Router.run(routes, function(Handler){
    React.render(<Handler />, document.body);
});
