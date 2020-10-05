import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddEvent.css';

const AddEvent = () => {
    const [data, setData] = useState({
        name: '',
        date: '',
        description: '',
        img: 'https://i.ibb.co/2vD3kHY/child-Support.png',
        color: '#FF7044'
    })
    const handleOnChange = (e) =>{
        const newData = {...data};
        if(e.target.name == 'name'){
            newData.name = e.target.value;
            setData(newData);
        }
        if(e.target.name == 'date'){
            newData.date = e.target.value;
            setData(newData);
        }
        if(e.target.name == 'description'){
            newData.description = e.target.value;
            setData(newData);
        }
    }
    const handleSubmit = () => {
        fetch('https://radiant-forest-22376.herokuapp.com/addEvent',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    }
    return (
        <section className="addevent-section m-0 p-0">
                <div className="row px-5 py-3">
                    <div className="col-2 p-0">
                        <Link to="/home"><img className="logo mb-4" src="https://i.ibb.co/x7yjzcH/Group-1329.png" alt="logo"/></Link>
                        <p className="text-primary mt-3"><img className="icon" src="https://i.ibb.co/QX0ZLTN/users-alt-1.png" alt=""/> Volunteer register list</p>
                        <p className="add-event"> <img className="icon" src="https://i.ibb.co/Zx6HxgC/plus-1.png" alt=""/> Add event</p>
                    </div>
                    <div className="col-10 p-0">
                    <h4>Add Event</h4>
                    <div className="addevent-box-out">
                        <div className="addevent-box-in">
                            <div style={{display: 'flex'}}>
                                <div style={{marginRight: '150px'}}>
                                    <label htmlFor=""><strong>Event Title</strong></label><br/>
                                    <input className="input-design" type="text" onChange={handleOnChange} name="name" placeholder="Enter title"/>
                                </div>
                                <div>
                                    <label htmlFor=""><strong>Event Date</strong></label><br/>
                                    <input className="input-design" type="date" onChange={handleOnChange} name="date"/>
                                </div>
                    
                            </div>
                            <label className="mt-3" htmlFor=""><strong>Description</strong></label><br/>
                            <textarea type="text" onChange={handleOnChange}placeholder="Enter designation" name="description" rows="6" cols="44"></textarea>
                        </div>
                        <button onClick={handleSubmit} className="btn btn-primary float-right mr-4">Submit</button>
                    </div>
                    </div>
                </div>
        </section>
    );
};

export default AddEvent;