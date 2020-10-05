import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Registration.css';

const Registration = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name} = useParams();
    const [data, setData] = useState({
        displayName: loggedInUser.displayName,
        email: loggedInUser.email,
        name: name
    });
   
    const handleOnChange = (e) => {
        const newData = {...data};
        if(e.target.name == 'date'){
            newData.date = e.target.value;
            setData(newData);
        }
        if(e.target.name == 'description'){
            newData.description = e.target.value;
            setData(newData);
        }
        if(e.target.name == 'volunteerType'){
            newData.name = e.target.value;
            setData(newData);
        }
    }

    const handleSubmit = (e) => {
         e.preventDefault();
         fetch('https://radiant-forest-22376.herokuapp.com/addVolunteerData',{
             method: 'POST',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify(data)
         })
         alert('Registration Successful');
    }
    return (
        <div>
            <section className="reg-section">
                <Link to="/home"><img className="logo-design" src="https://i.ibb.co/x7yjzcH/Group-1329.png" alt="logo"/></Link>
                <div className="reg-box">
                    <form onSubmit={handleSubmit} action="">
                        <input type="text" defaultValue={loggedInUser.displayName} placeholder="Full Name"/>
                        <input type="email" defaultValue={loggedInUser.email} placeholder="Username or Email"/>
                        <input type="date" required onChange={handleOnChange} name="date"/>
                        <input type="text" placeholder="Description" onChange={handleOnChange} name="description"/>
                        <input type="text" defaultValue={name} onChange={handleOnChange} placeholder="Enter Volunteer type" name="volunteerType"/>
                        <input className="reg-btn" type="submit" value="Registration"/>
                    </form>                   
                </div>
           </section>
        </div>
    );
};

export default Registration;