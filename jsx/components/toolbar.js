var React = require('react'),
    mui = require('material-ui'),
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    RaisedButton = mui.RaisedButton,
    FontIcon = mui.FontIcon;

var Navigation = React.createClass({
    render: function() {
        return (
            <div id="top-nav">
                <Toolbar className="toolbar row">
                    <ToolbarGroup float="right">
                        <FontIcon className="mui-icon-pie" />
                        <FontIcon className="mui-icon-sort" />
                        <span className="mui-toolbar-separator">&nbsp;</span>
                        <RaisedButton label="Create" primary={true} />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
});

module.exports = Navigation;
