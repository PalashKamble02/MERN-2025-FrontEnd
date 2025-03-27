import { NavLink } from "react-router-dom";
import Analytics from "../components/Analytics";

 const About = () => {
    return (
        <>
        <main>
            <section className="section-hero">
             <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1> Why Choose Us ?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Corrupti repellat consequatur accusamus dolorum sequi? Ipsa, 
                         voluptates quisquam quo maiores delectus officiis nobis corrupti cum, 
                         aperiam molestias, pariatur id? 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Corrupti repellat consequatur accusamus dolorum sequi? Ipsa, 
                         voluptates quisquam quo maiores delectus officiis nobis corrupti cum, 
                         aperiam molestias, pariatur id? 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Corrupti repellat consequatur accusamus dolorum sequi? Ipsa, 
                         voluptates quisquam quo maiores delectus officiis nobis corrupti cum, 
                         aperiam molestias, pariatur id? 
                    </p>
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
        </>
    )
};

export default About;