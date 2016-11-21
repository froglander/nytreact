// Include React 
var React = require('react');

var Search = React.createClass({

    // Here we render the component
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
                                        <input type="text" className="form-control" id="searchTopic"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Start Year</label>
                                        <input type="text" className="form-control" id="startYear"/>
                                    </div>
                                    <div className="form-group">
                                        <label>End Year</label>
                                        <input type="text" className="form-control" id="endYear"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">
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

// Export the component back for use in other files
module.exports = Search;