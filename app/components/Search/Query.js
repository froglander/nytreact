// Search - queries the NYT API for articles. Displays API search results from another possible
// Query component and Results component. Gives the user the ability to save an article to their
// Saved Articles.

// Require dependencies
var React = require('react');


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

        console.log("this.state.searchTopic: ", this.state.searchTopic);
        console.log("this.state.startYear: ", this.state.startYear);
        console.log("this.state.endYear: ", this.state.endYear);

        this.props.submitSearch(this.state.searchTopic, this.state.startYear, this.state.endYear);
        return false;
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