var React = require('react');

var Results = React.createClass({

    getInitialState: function () {
        return {
            headline: "",
            web_url: "",
            pub_date: "",

        }
    },
    render: function () {
        if (!this.props.results.hasOwnProperty('docs')) {
            console.log("it's blank");

            return (
                <li className="list-group-item">
                    <h3>
                        Enter search terms to begin
                    </h3>
                </li>

            )
        }
        else {
            console.log("search results shouldn't be blank");

            var articles = this.props.results.docs.map(function (article, index) {
                return (
                    <div key={index}>
                        <li className="list-group-item">
                            <h3>
                                <span>{article.headline.main}</span>
                                <a href={article.web_url}>View Article</a>
                            </h3>
                            <p>Date published: {article.pub_date}</p>
                        </li>
                    </div>
                )
            }.bind(this))
        }
        console.log("assigned articles values");

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