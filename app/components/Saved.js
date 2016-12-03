// Include React 
var React = require('react');
var axios = require('axios');

var Saved = React.createClass({

    getInitialState: function () {
        return {
            savedArticles: ""
        }
    },

    componentDidMount: function () {
        return axios.get('/api/saved')
            .then(function (results) {
                console.log("axios results", results);
                return results;
            })
            .then(function (articleData) {
                this.setState({
                    savedArticles: articleData.data
                });
                console.log("saved stuff");
            }.bind(this))
    },

    handleClick: function (item, event) {
        console.log("handleClick delete");
        console.log(item);

        // Code to delete an item
        return axios.delete('/api/saved', {
            params: {
                'title': item.title,
                'date': item.data,
                'url': item.url,
            }
        })
            .then(function (results) {
                console.log("axios delete resutls: ", results);
                return results;
            })
            .then(function (data) {
                // Code to get updated list
                return axios.get('/api/saved')
                    .then(function (results) {
                        console.log("axios results", results);
                        return results;
                    })
                    .then(function (articleData) {
                        this.setState({
                            savedArticles: articleData.data
                        });
                        console.log("saved stuff");
                    }.bind(this))
            }.bind(this))
    },
    // Here we render the component
    render: function () {

        if (this.state.savedArticles == "") {
            return (
                <li className="list-group-item">
                    <h3>
                        No articles saved :(
                    </h3>
                </li>
            )
        }
        else {
            var articles = this.state.savedArticles.map(function (article, index) {
                return (
                    <div key={index}>
                        <li className="list-group-item">
                            <h3>{article.title}</h3>
                            <h4><a href={article.url}>View Article</a></h4>
                            <button className="btn btn-primary pull-right"
                                    onClick={this.handleClick.bind(this, article)}>Delete
                            </button>
                            <p>Date published: {article.date}</p>
                        </li>
                    </div>
                )
            }.bind(this))
        }

        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Saved Articles</h3>
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

// Export the component back for use in other files
module.exports = Saved;