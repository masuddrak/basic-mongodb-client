import { useLoaderData } from "react-router-dom";


const UpdateUser = () => {
    const localUser = useLoaderData()
    console.log(localUser)
    const handelUpdateUser=e=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const email=form.email.value
       const user={name,email}
       console.log(user)
       fetch(`http://localhost:5000/users/${localUser._id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
       })
       .then(res=>res.json())
       .then(data=>console.log(data))
    }
    return (
        <div>
            Update User:{localUser.name}

            <form onSubmit={handelUpdateUser} className="space-y-3">
                <input type="text" defaultValue={localUser?.name} className="border" name="name" />
                <br></br>
                <input type="email"  defaultValue={localUser?.email}  className="border" name="email" />
                <br />
                <input type="submit" className="px-4 bg-green-300" value="update Now" />
            </form>
        </div>
    );
};

export default UpdateUser;