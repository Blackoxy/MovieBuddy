import React, {Component} from 'react'
import logo from "../assets/movie-buddy-logo.png"
import Movie from "./Movie"
import UserForm from "./UserForm"

class Secret extends Component {
    
    render(){
        console.log(this.props.movieData)
        const movies = this.props.data.map(movie => {
            return <Movie    poster_path={movie.poster_path}
                            title={movie.title}
                            overview={movie.overview}
                            popularity={movie.popularity}
                            />
            })

        const verify = (movies) => {
            let unique = localStorage.getItem('User_id')
            let arr = []
            for (let i in movies) {
                arr.push(movies[i].userId)
            }
            for (let j in arr) {
               if (unique === arr[j]) {
                    return <div>Welcome Back!!!</div>
               } 
            }
            for (let k in arr) {
                if (unique !== arr[k]){
                    return <UserForm movieData={this.props.movieData} />
                }
            }
        }      

        return (
            <div>
                <img className="buddyLogo" src={logo} alt="movie buddy logo"/>
                {verify(this.props.movieData)}
                <button className="btn btn-info" onClick={this.props.auth.logout}>Logout</button>
                <ul className="card listing">
                    {movies}
                </ul>
            </div>
        )
    }
}

export default Secret
