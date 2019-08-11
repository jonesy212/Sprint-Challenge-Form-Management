import React from 'react'
import UserCard from './UserCard'

import './UserCard.css'

class UserCards extends React.Component {
    constructor(props){
        super(props)
        
    }
    render () {
        return(
            <div>
            {this.props.userData.map((item, index)=> {
                return <UserCard key={index} 
                ingredients= {item.ingredients} 
                name= {item.name}
                />
            })}
            </div>
        )
    }
}

export default UserCards