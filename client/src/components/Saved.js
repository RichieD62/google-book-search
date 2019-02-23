import React, { Component } from 'react';
import $ from 'jquery';

class Saved extends Component {

    constructor(props) {
        super(props)
        console.log("Initialized")
        this.state = {
        }
        this.deleteFromDb = this.deleteFromDb.bind(this)

    }


    pullFromDb() {
        $.ajax({
            method: "GET",
            url: "/saved",
            success: (returnData) => {
                console.log("Successfully fetched data from MongoDB")
                console.log(returnData)
                const results = returnData



                var bookCards = []


                results.forEach((book) => {

                    const bookButtonStyle = {
                        float: "right",
                        marginRight: "15px"
                    }


                    const card = <div key={book._id} className="card mb-3" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={book.image} className="card-img" alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.description}</p>
                                    <p className="card-text"><small className="text-muted">{book.authors}</small></p>
                                    <a href={book.link} target="_blank"><small>Click here for more information</small></a>



                                </div>
                                <button onClick={() => this.deleteFromDb(book)} style={bookButtonStyle} type="button" className="btn btn-danger pull-right">Delete</button>
                            </div>

                        </div >

                    </div >

                    bookCards.push(card)
                })

                this.setState({ cards: bookCards })

            },
            error: (err) => {
                console.log(err)
            }
        })

    }

    deleteFromDb(book) {
        $.ajax({
            method: "DELETE",
            url: "/" + book._id,
            success: () => {
            },
            error: (err) => {
                console.log(err)
            }
        
    })
}

componentDidUpdate() {
    this.pullFromDb();
}

    refreshPage() {
        window.location.reload();
        console.log("Page refreshed")
    }

    componentDidMount(){
        this.pullFromDb();
    }


    render() {

        

        return (
            <div>
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {this.state.cards}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Saved