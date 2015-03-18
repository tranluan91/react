var React = require('react'),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton,
    FlatButton = mui.FlatButton;

var Main = React.createClass({
    render: function() {
        return (
            <div className="example">
                <h1>Material-ui</h1>
                <h2>Example project</h2>
                <RaisedButton label="Primary" primary={true} onTouchTap={this._handleTouchTap} />
                <FlatButton label="Primary" primary={true} />
            </div>
        );
    },

    _handleTouchTap: function() {
        alert('This is an lert of example project');
    }
});

module.exports = Main;