import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Events.css';

const Events = () => {
    const [del, setDel] = useState(false);
    const [personData, setPersonData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch(`https://radiant-forest-22376.herokuapp.com/data?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setPersonData(data))
    },[del])

    const handleDelete = (id) => {
        fetch(`https://radiant-forest-22376.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                setDel(!del);
            }
        })
    }
    return (
        <>
            <section className="events-section">
            <Header></Header>
            {
                loggedInUser.email ?

                <div className="row py-5 pl-5 text-center">
                  
                        {
                            personData.map(data =>(
                                <>
                                <div className="col-5 events-box">
                                    <div>
                                        <img className="events-img" src="https://i.ibb.co/nkdkJfF/extra-Volunteer.png" alt="event-img"/>
                                    </div>
                                    <div className="event-details-box">     
                                        <h4>{data.name}</h4>
                                        <h6>{(new Date(data.date).toDateString('dd/MM/yyyy'))}</h6>
                                        <button onClick={()=> handleDelete(`${data._id}`)} className="cancel-btn btn bg-danger">Cancel</button>
                                    </div>          
                                </div>
                                </>
                            ))
                        }
                </div>
                :
                <h2 className="text-center font-weight-bold text-danger my-5 py-3">Event is empty. Please go to Login</h2>
                   
             }

            </section>
        </>
    );
};

export default Events;