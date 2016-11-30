// Include React 
var React = require('react');
var axios = require('axios');

var Query = require('./Search/Query');
var Results = require('./Search/Results')

var Search = React.createClass({

    // Set initial state
    getInitialState: function() {
        return {
            searchTopic: "",
            startYear: "",
            endYear: " ",
            results: {}
        }
    },
    setQuery: function(query, start, end) {
        console.log("Search query");
        this.setState({
            searchTopic: query,
            startYear: start,
            endYear: end
        });
        this.runQuery();
    },
    runQuery: function() {
    // componentDidUpdate: function() {
        console.log("runQuery");

        var apiKey = "451bd774a8f34d3a9b4807d6a38c91c9";
        var queryTerm = this.state.searchTopic.trim();
        var queryStartYear = this.state.startYear.trim() + "0101";
        var queryEndYear = this.state.endYear.trim() + "1231";

        console.log("queryTerm: ", queryTerm);
        console.log("queryStartYear: ", queryStartYear);
        console.log("queryEndYear: ", queryEndYear);

        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': apiKey,
                'q': queryTerm,
                'begin_date': queryStartYear,
                'end_date': queryEndYear
            }
        })
            .then(function(results){
                console.log("runQuery Search Results:", results.data.response);

                //return results.data.response;
                // return false;
                this.setState({
                    results: results.data.response
                })
            }.bind(this));
    },
    // Here we render the component
    render: function () {
        console.log("Render search results: ", this.state.results)

        return (
            <div className="container">
                <Query submitSearch={this.setQuery} />

                <Results results={this.state.results} />
                {/*<Results />*/}
            </div>
        )
    }
});

// Export the component back for use in other files
module.exports = Search;