import React from 'react';
import withData from '../hoc/with-data';


const UserList = ({ data }) => {
    return (
            <div className="container user-list">
                <h1> Users List</h1>
                {
                        data.map(user => (
                        <div className="post" hey={user.id}>
                            <h1>{user.title}</h1>
                            <p>{user.name}</p>
                        </div>)
                    )
                }
            </div>
    )
}
export default withData(UserList, 'https://jsonplaceholder.typicode.com/users');
