import React from "react";

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
                        <a href="/contact"><button className="btn"> connect now</button></a>
                        <a href="/services" ><button className=" btn secondary-btn">learn more</button></a>
                    </div>
                </div>
                {/* hero images */}
                <div className="hero-images">
                    <img src="/images/home.png" alt="home page png" width="400" height="500"/>
                </div>
             </div>
            </section>
        </main>

        <section className="section-analytics">
            <div className="container grid grid-four-cols">
                <div className="div1">
                    <h2>50+</h2>
                    <p>registered companied</p>
                </div>
                <div className="div1">
                    <h2>100,00+</h2>
                    <p>Happy clients</p>
                </div>
                <div className="div1">
                    <h2>500+</h2>
                    <p>Well Known Developers</p>
                </div>
                <div className="div1">
                    <h2>24/7</h2>
                    <p>services</p>
                </div>

            </div>
        </section>
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