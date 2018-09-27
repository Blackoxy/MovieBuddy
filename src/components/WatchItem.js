import React from 'react'

class WatchItem extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render (){
        console.log(this.props.movieData)
        return (
            <div>
                <div>{this.props.title}  -  <a onClick={() => this.props.deleteOne(this.props.id)} className="btn btn-danger">remove movie</a></div>
            </div>
          
            )
    }
}


export default WatchItem;
