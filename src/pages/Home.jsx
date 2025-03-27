import React from "react";
import Analytics from "../components/Analytics";
import { NavLink } from "react-router-dom";

  const Home = () => {

    return (
        <>
        <main>
            <section className="section-hero">
             <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p>We are the World Best Developers ORG</p>
                    <h1> Welcome to Developer's ORG</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Corrupti repellat consequatur accusamus dolorum sequi? Ipsa, 
                         voluptates quisquam quo maiores delectus officiis nobis corrupti cum, 
                         aperiam molestias, pariatur id? 
                    </p>
                    <div className="btn btn-group">
                        <NavLink to="/contact"><button className="btn"> connect now</button></NavLink>
                        <NavLink to="/services" ><button className=" btn secondary-btn">learn more</button></NavLink>
                    </div>
                </div>
                {/* hero images */}
                <div className="hero-images">
                    <img src="/images/home.png" alt="home page png" width="400" height="500"/>
                </div>
             </div>
            </section>
        </main>

       <Analytics/>
        <section className="section-hero">
             <div className="container grid grid-two-cols">
                  {/* hero images */}
                  <div className="hero-images">
                    <img src="/images/design.png" alt="home page png" width="400" height="500"/>
                </div>
                <div className="hero-content">
                    <p>We are to help ypu </p>
                    <h1> Get Started Today</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Corrupti repellat consequatur accusamus dolorum sequi? Ipsa, 
                         voluptates quisquam quo maiores delectus officiis nobis corrupti cum, 
                         aperiam molestias, pariatur id? 
                    </p>
                    <div className="btn btn-group">
                        <a href="/contact"><button className="btn"> connect now</button></a>
                        <a href="/services" ><button className=" btn secondary-btn">learn more</button></a>
                    </div>
                </div>
              
             </div>
            </section>
        </>
    )
};

export default Home;