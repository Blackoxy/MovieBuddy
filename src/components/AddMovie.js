import React from 'react'

const apiUrl = 'http://localhost:4000/movie'

class AddMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            user_id: localStorage.getItem('User_id')

        }

    }

    postData = (e) => {
        e.preventDefault()
        const body = JSON.stringify(this.state)
        const options = {
            method: 'POST',
            body: body,
            headers: new Headers({
                'content-type': 'application/json'

            })

        }

        fetch(apiUrl, options)
            .then(res => res.json())
            .then(() => {

            })

    }

    render() {

        return (
            <form className="positionForm" onSubmit={this.postData} >
                <section className="form">
                    <div className="hidden">
                        <label>Title:
                            <input type="text" name="title" value={this.state.title} />

                </label>
                    </div>
                    <div className="hidden">
                        <label>User ID:
                            <input type="text" name="user_id" value={this.state.user_id}/>

                        </label>
                    </div>
                <button className="addButton" type="submit">Add to Watchlist</button>
                </section>
            </form>

            )

    }

}

export default AddMovie
