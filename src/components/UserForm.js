import React from 'react'

const apiUrl = 'http://localhost:4000/user'

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
            <form className="positionForm" onSubmit={this.postData} > 
                <section className="form">
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
                </section>
                <button type="submit">Create Profile</button>
            </form>
        )
    }
}

export default UserForm