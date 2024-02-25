import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers()
        console.log('am i front');
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    render() {
        console.log('wher am i');
        return (
            <div>
                List of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

// for initaaite before render data fetching
function loadData(store) {
    // Action creator is being used before render component
    //  we cant use connect, because Provider hasnt been rendered
    return store.dispatch(fetchUsers())
    // 
}

export { loadData }

export default connect(mapStateToProps, { fetchUsers })(UsersList)