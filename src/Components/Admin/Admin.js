import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    const [del, setDel] = useState(false);
    const [volunteerInfo, setVolunteerInfo] = useState([]);
    useEffect(()=>{
        fetch('https://radiant-forest-22376.herokuapp.com/allData')
        .then(res => res.json())
        .then(data => setVolunteerInfo(data))
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
        <section className="admin-section">
            <div className="row">
                <div className="col-2 p-0">
                     <img className="logo mb-4" src="https://i.ibb.co/x7yjzcH/Group-1329.png" alt="logo"/>
                     <p className="text-primary mt-3"><img className="icon" src="https://i.ibb.co/QX0ZLTN/users-alt-1.png" alt=""/> Volunteer register list</p>
                    <Link className="add-event" to="/addevent"><p> <img className="icon" src="https://i.ibb.co/Zx6HxgC/plus-1.png" alt=""/> Add event</p></Link> 
                </div>
                <div className="col-10 p-0">
                    <h4>Volunteer register list</h4>
                    <div className="list-box-out p-3">
                        <div className="list-box-in">
                            <table>
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Registration Date</th>
                                    <th>Volunteer list</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        volunteerInfo.map(data =>(
                                        <tr>
                                            <td>{data.displayName}</td>
                                            <td>{data.email}</td>
                                            <td>{(new Date(data.date).toDateString('dd/MM/yyyy'))}</td>
                                            <td>{data.name}</td>
                                            <td><img onClick={()=> handleDelete(`${data._id}`)} className="dlt-action" src="https://i.ibb.co/prpVFvw/trash-2-9.png" alt="dlt-logo"/></td>
                                        </tr>

                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                           
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Admin;