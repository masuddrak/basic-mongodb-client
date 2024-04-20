import { useLoaderData } from "react-router-dom";

const Home = () => {
    const users=useLoaderData()
    console.log(users)
    const handelUser=e=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const email=form.email.value
       const user={name,email}
       console.log(user)
       fetch("http://localhost:5000/users/",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(user)

       })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            form.reset()
        })
    }
    return (
        <div>
            <h2>This is Home page</h2>
            <form onSubmit={handelUser}>
                <input type="text" className="border" name="name" />
                <br></br>
                <input type="email" className="border" name="email" />
                <br />
                <input type="submit" className="bg-green-300" value="submit" />
            </form>

            <div>
                {
                    users.map(user=><p key={user._id}>{user.name}:{user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Home;