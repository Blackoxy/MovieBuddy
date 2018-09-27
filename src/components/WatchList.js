import React from 'react'
import WatchItem from './WatchItem'
import MovieBuddyMatches from './MovieBuddyMatches'

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
        return <WatchItem title={movie.title} id={movie.id} deleteOne={props.deleteOne}/>
    })

    return (
        <div className="form row">
            {/* <h1>Watch List</h1> */}
                <MovieBuddyMatches movieData={props.movieData} />
            <div className="col">
                {movieMap}
            </div>
        </div>

    )
}

export default WatchList
