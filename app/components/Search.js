// Include React 
var React = require('react');

var Query = require('./Search/Query');

var Search = React.createClass({

    // Set initial state
    getInitialState: function() {
        return {
            searchTopic: "",
            startYear: "",
            endYear: " ",
            results: []
        }
    },
    searchQuery: function(query, start, end) {
        console.log("Search query");
        this.setState({
            searchTopic: query,
            startYear: start,
            endYear: end
        })
    },
    // Here we render the component
    render: function () {

        return (
            <div className="container">
                <Query submitSearch={this.searchQuery} />
            </div>
        )
    }
});

// Export the component back for use in other files
module.exports = Search;