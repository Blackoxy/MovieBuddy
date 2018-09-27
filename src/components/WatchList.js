import React from 'react'
import WatchItem from './WatchItem'

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
    console.log("array ", movieArr)

    const movieMap = movieArr.map(movie => {
        return <WatchItem title={movie.title} id={movie.id} deleteOne={props.deleteOne}/>
    })

    return (
        <div className="form">
            <h1>Watch List</h1>
            <div>
                {movieMap}
            </div>
        </div>

    )
}

export default WatchList
