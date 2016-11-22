// Include React 
var React = require('react');

// Included all of the React Router dependencies
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

// Include all sub-components
// var Search = require('./Search');


var Main = React.createClass({

    // Here we render the component
    render: function () {

        return (
            <div className="container">
                <div className="row">

                    <div className="jumbotron text-center" id="nytheader">
                        <h1>New York Times Search</h1>
                        <h3>Search for, Save, and Annotate articles!</h3>

                        <a href="#/Search"><button className="btn btn-default">Search</button></a>
                        <a href="#/Saved"><button className="btn btn-default">Saved</button></a>

                    </div>

                    {/* This will dump the correct child component */}
                    {this.props.children}


                </div>
            </div>
        )
    }
});

// Export the component back for use in other files
module.exports = Main;