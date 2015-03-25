var React = require('react'),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton,
    FontIcon = mui.FontIcon,
    TextField = mui.TextField,
    FlatButton = mui.FlatButton;

var Main = React.createClass({
    getInitialState: function() {
        return {
            username: 'Luantv',
            friends: ['trung', 'hung', 'tuyen']
        }
    },
    addFriend: function(friend) {
        this.setState({
            friends: this.state.friends.concat([friend])
        });
    },
    render: function() {
        return (
            <div className="example">
                <h1>Material-ui</h1>
                <h2>Example project</h2>
                <RaisedButton label="Primary" primary={true} onTouchTap={this._handleTouchTap} />
                <FlatButton label="Primary" primary={true} />
                <RaisedButton label={this.state.username} secondary={true} />
                <h3>Add new friend</h3>
                <AddFriend addNew={this.addFriend} />
                <ShowList names={this.state.friends} />
            </div>
        );
    },
    handleChange: function(e) {
        this.setState({
            username: e.target.value
        });
    },

    _handleTouchTap: function() {
        alert('This is an lert of example project');
    }
});

var AddFriend = React.createClass({
    getInitialState: function() {
        return {
            newFriend: ''
        }
    },
    updateNewFriend: function(e) {
        this.setState({
            newFriend: e.target.value
        });
    },
    handleAddNew: function() {
        this.props.addNew(this.state.newFriend);
        this.setState({
            newFriend: ''
        });
    },
    render: function() {
        return (
            <div className="add-friend">
                <TextField type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
                <RaisedButton label="Add new friend" onClick={this.handleAddNew} secondary={true} />
            </div>
        );
    }
});

var ShowList = React.createClass({
    render: function() {
        var listItems = this.props.names.map(function(friend) {
            return <FlatButton label={friend} primary={true} />
        });
        return (
            <div className="list-friend">
                <ul>{listItems}</ul>
            </div>
        );
    }
});

module.exports = Main;