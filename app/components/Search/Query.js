// Search - queries the NYT API for articles. Displays API search results from another possible
// Query component and Results component. Gives the user the ability to save an article to their
// Saved Articles.

// Require dependencies
var React = require('react');
var axios = require('axios');

var Query = React.createClass({

    // Set initial state to blank values
    getInitialState: function () {
        return {
            searchTopic: "",
            startYear: "",
            endYear: " "
        }
    },
    // handleSubmit: function() {
    //     console.log("Search clicked");
    //     return false;
    // },
    // Chrome console grumbled about having a value set without having an onChange event
    // to go with it
    handleChange: function(e) {
        console.log("input field changed");
        var changedState = {};
        changedState[e.target.id] = e.target.value;
        this.setState(changedState);
    },
    // Send the search terms to the parent component
    handleSubmit: function() {
        console.log("Submit clicked");

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
                console.log("Query Results:", results.data.response);

                return results;
                // return false;
            });


        //this.props.submitSearch(this.state.searchTopic, this.state.startYear, this.state.endYear);
        //return false;
    },
    // Render the Query component
    render: function () {
        return (
            <div className="container">

                {/*<div className="col-sm-offset-2 col-sm-8">*/}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Search</h3>
                            </div>
                            <div className="panel-body">
                                <form>
                                    <div className="form-group">
                                        <label>Topic</label>
                                        <input type="text" value={this.state.searchTopic} className="form-control" id="searchTopic" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Start Year</label>
                                        <input type="text" value={this.state.startYear} className="form-control" id="startYear" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>End Year</label>
                                        <input type="text" value={this.state.endYear} className="form-control" id="endYear" onChange={this.handleChange}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={this.handleSubmit}>
                                        Search&nbsp;<span className="glyphicon glyphicon-search"></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

module.exports = Query;