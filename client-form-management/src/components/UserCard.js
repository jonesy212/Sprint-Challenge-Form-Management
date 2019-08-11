import React  from 'react'

import './UserCard.css';


class UserCard extends React.Component {
    constructor(props){
        super(props)
    
    }
    
    render() {
        console.log(this.props.userData)
        return(
            <div className='individual-cards'>
                <p className= 'ingredient-title'>{this.props.name}</p>
                <div style={{'whiteSpace':'pre-line'}}>
                <p>{[this.props.ingredients.join('\n')]}</p>
                </div>
            </div>
        )
    }
}
    
export default UserCard