import React, { useEffect, useState } from 'react';
import './Home.css'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Home = () => {
    const [volunteerData,setVolunteerData] = useState([])
   useEffect(()=>{
       fetch('https://radiant-forest-22376.herokuapp.com/getVolunteerInfo')
       .then(res => res.json())
       .then(data => setVolunteerData(data) )
   },[])
    return (
        <>
        <Header></Header>
        <section className="container">
            <div className="text-center mt-5">
                <h1 className="font-weight-bold">I GROW BY HELPING PEOPLE IN NEED.</h1>
                <div className="example text-center">
                    <input type="text" placeholder="Search.." name="search"/>
                    <button>Search</button>
                </div>
            </div>
            <div className="row my-5">
                {
                    volunteerData.map(data =>(
                      <Link key={data.id} className="link-design" to={`/registration/${data.name}`}>
                          <>
                           <div className="col-lg-4 col-xl-3 col-md-6 col-12 p-0 my-3">
                              <div className="card">
                                    <img src={data.img} className="card-img-top" alt="..."/>
                                    <div className="card-body" style={{backgroundColor: `${data.color}`}}>
                                    <p className="card-text my-1">{data.name}</p>
                                    </div>
                              </div>
                          </div>
                          </>
                      </Link>
                    ))
                }
            </div>
        </section>
        </>
    );
};

export default Home;