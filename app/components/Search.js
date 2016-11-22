// Include React 
var React = require('react');

var Query = require('./Search/Query');

var Search = React.createClass({

    // Here we render the component
    render: function () {

        return (
            <div className="container">
                <Query />
            </div>
        )
    }
});

// Export the component back for use in other files
module.exports = Search;