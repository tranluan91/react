var React = require('react'),
    mui = require('material-ui'),
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    RaisedButton = mui.RaisedButton,
    FontIcon = mui.FontIcon;

var Router = require('react-router'),
    Link = Router.Link;

var Navigation = React.createClass({
    render: function() {
        return (
            <div id="top-nav">
                <Toolbar className="toolbar row">
                    <ToolbarGroup float="left">
                        <Link to="index"><RaisedButton label="Index" /></Link>
                        <Link to="dashboard"><RaisedButton label="Dashboard" /></Link>
                        <Link to="inbox"><RaisedButton label="Inbox" /></Link>
                    </ToolbarGroup>
                    <ToolbarGroup float="right">
                        <span className="mui-toolbar-separator">&nbsp;</span>
                        <RaisedButton label="Create" primary={true} />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
});

module.exports = Navigation;
