import React  from 'react'


class UserCard extends React.Component {
    constructor(props){
        super(props)
    
    }
    
    render() {
        console.log(this.props.userData)
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.ingredients}</p>
            </div>
        )
    }
}
    
export default UserCard