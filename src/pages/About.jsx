import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const About = () => {
    const loaderUsers=useLoaderData()
    const [users,setUsers]=useState(loaderUsers)
    const handelDeleteUser=id=>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const removeUser=users.filter(user=>user._id!==id)
            setUsers(removeUser)
        })
        
    }
    return (
        <div>
            <h2>This is About Page</h2>
            <div>
                {
                    users.map(user=><p key={user._id}>{user.name}:{user.email} <button className="btn btn-accent" onClick={()=>handelDeleteUser(user._id)}>delete</button></p>)
                }
            </div>
        </div>
    );
};

export default About;