import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <section id="error-page">
        <div className=" content">
            <h2 className="header">404</h2>
            <h4>Sorry! Page Not Found</h4>
            <p>
                Oops! it seems like the page you're trying to access doesn't exist.
                If you belive thiere's an issue, feel free to report it, and we'll 
                look into it.
            </p>
            <div className="btns">
                <NavLink to="/"> return home</NavLink>
                <NavLink to="/contact">report problem</NavLink>
            </div>
        </div>
    </section>
    </>
  )
}

export default Error