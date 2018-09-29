import React from 'react'
import { Button } from 'react-bootstrap'
import MovieBuddyMatch from './MovieBuddyMatch'

const WatchList = (props) => {
    let go = (match) => {
        let unique = localStorage.getItem('User_id')
        let arr = []
        for (let i in match) {
            if (match[i].user_id === unique){
                arr.push(match[i])
            }
        }
        return arr
    }
    let movieArr = go(props.movieData)

    const movieMap = movieArr.map(movie => {
        return <WatchItem  title={movie.title} id={movie.id} deleteOne={props.deleteOne}/>
        })

    return (

        <div className="buddies-movies mx-auto bg-caramel py-3">
            <div>
                <h4>Watch List</h4>
                <div>
                    {movieMap}
                </div>
            </div>
            <MovieBuddyMatch movieData={props.movieData}/>

        </div>

        )
}

class WatchItem extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render (){
        console.log(this.props.movieData)
        return (
            <div className="listItem">
                <a>{this.props.title}</a>  -  <Button onClick={() => this.props.deleteOne(this.props.id)} className="bg-teal removeButton">remove movie</Button>
            </div>

            )
}
}

export default WatchList
