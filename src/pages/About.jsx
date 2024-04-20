import { useLoaderData } from "react-router-dom";

const About = () => {
    const users=useLoaderData()
    return (
        <div>
            <h2>This is About Page</h2>
            <div>
                {
                    users.map(user=><p key={user._id}>{user.name}:{user.email}</p>)
                }
            </div>
        </div>
    );
};

export default About;