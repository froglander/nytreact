var React = require('react');

var Results = React.createClass({

    getInitialState: function () {
        // Set up initial values
        return {
            headline: "",
            web_url: "",
            pub_date: "",
        }
    },
    handleClick: function(thisItem, event) {
        console.log("Click to save article");
        console.log(thisItem);
    },
    render: function () {
        if (!this.props.results.hasOwnProperty('docs')) {
            // If it is blank, return a default
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Results</h3>
                                </div>
                                <div className="panel-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <h3>
                                                Enter search terms to begin
                                            </h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            // Otherwise, build the resultset and return it
            var articles = this.props.results.docs.map(function (article, index) {
                return (
                    <div key={index}>
                        <li className="list-group-item">
                            <h3>{article.headline.main}</h3>
                            <h4><a href={article.web_url}>View Article</a></h4>
                            <button className="btn btn-primary pull-right" onClick={this.handleClick.bind(this, article)}>Save</button>
                            <p>Date published: {article.pub_date}</p>
                        </li>
                    </div>
                )
            }.bind(this))
        }

        // Now render the results!
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Results</h3>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {articles}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Results;