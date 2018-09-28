import React from 'react'

// const apiUrl = 'http://localhost:4000/user'
const apiUrl = 'https://moviebuddy-server.herokuapp.com/user'

class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            userId: localStorage.getItem('User_id')
            ,

        }

    }

    postData = (e) => {
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
            .then(posted => {

            })

        this.setState({
            firstName: '',
            lastName: '',

        })

    }

    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState({
            [key]: value

        })

    }

    render() {

        return (
            <div className="new-user-form bg-eggplant">
                <form className="positionForm" onSubmit={this.postData} >
                    <div>
                        <label>First Name:
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>Last Name:
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div className="hidden">
                        <label>User ID:
                            <input type="text" name="userId" value={this.state.userId}/>
                        </label>
                    </div>
                    <button className="newUserBtn bg-teal" type="submit">Create Profile</button>
                </form>
            </div>

            )

    }

}

export default UserForm
