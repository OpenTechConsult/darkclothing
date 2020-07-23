import React from 'react';
import withData from '../hoc/with-data';


export const UserProfile = ({ data, name, email}) => {
    return (
        <div className="container">
                <h1>{name}</h1>
                <h2>{email}</h2>
                Posts:
                {
                        data.map(post => (
                        <div className="post" hey={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>)
                    )
                }
            </div> 
    )
}
export default withData(UserProfile, 'https://jsonplaceholder.typicode.com/posts');