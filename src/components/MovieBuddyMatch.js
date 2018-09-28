import React from 'react'

const MovieBuddyMatch = (props) => {
    let go = (match) => {
        let unique = localStorage.getItem('User_id')
        let arr = []
		let arr2 = []
		let arr3 = []
        for (let i in match) {
            if (match[i].user_id === unique){
                arr.push(match[i])
            }
        }
		for (let j in arr) {
			const checkMatch = match.filter(all => {
				return all.title === arr[j].title
			})
			arr2.push(...checkMatch)
		}
		for (let k in arr2) {
			if (arr2[k].user_id !== unique) {
				arr3.push(arr2[k])
			}
        }
		return arr3
    }

    let buddy = go(props.movieData)
    console.log("movies", buddy)

    const buddies = buddy.map(movie => {
        return <div>{movie.title}</div>
    })

    let user = (match) => {
        let unique = localStorage.getItem('User_id')
        // let unique = 'auth0|5babb519440d866caea10b5d'
        let arr = []
		let arr2 = []
		let arr3 = []
		let arr4 = []
		let arr6 = []
        for (let i in match) {
            if (match[i].user_id === unique){
                arr.push(match[i])
            }
        }
		for (let j in arr) {
			const checkMatch = match.filter(all => {
				return all.title === arr[j].title
			})
			arr2.push(...checkMatch)
		}
		for (let k in arr2) {
			if (arr2[k].user_id !== unique) {
				arr3.push(arr2[k])
			}
		}
		for (let l in arr3) {
			const buddy = match.filter(all => {
				return all.userId === arr3[l].user_id
			})
			arr4.push(...buddy)
		}
		const arr5 = [...arr3, ...arr4]
		
		for (let m in arr5) {
			if (arr5[m].firstName !== null){
				arr6.push(arr5[m])
			}
		}
		return arr6
    }

let userMatch = user(props.movieData)
console.log("user ", userMatch)

const movieUsers = userMatch.map(user => {
    return <div>{user.firstName}</div>
})

    return (
        <div>
            <h4>Buddies</h4>
            <div className="flexIt">
                <div>{buddies}</div> 
                <div>{movieUsers}</div>
            </div>
        </div>
    )
}
export default MovieBuddyMatch
