import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="container py-5 my-5">
      <div className="row">
        <div className='col-md-6'>
          <h1 className="text-primary fw-bold mb-4">About Us</h1>
          <p className='lead mb-4'>Gadget Station is one of Nigeria's driving on the web mobile phone retailer — offering the most recent cell iphones and energizing adornments.
Situated in Lagos since we began the organization in 2020,
We’ve put our proceeded progress down to knowing what buyers and organizations require, and having a broad scope of the best frill for the most recent gadgets — both integrated with our reality class client benefit.
Gadget Station is focused on giving superb client administration and we expect to give precise and valuable item exhortation to clients through our site.
As an organization, we are committed to consistent advancement to upgrade everybody’s involvement with Gadget Station, and it’s gratitude to that that we presently offer more than 100 client item audits, and have guaranteed the persistent improvement of our site to offer highlights dependent on client input.
Our committed and proactive group of item specialists guarantee that we’re reliably capable offer the most recent and best embellishments for the most prominent gadgets. Browse iphones,  and that’s only the tip of the iceberg.
All accompany a multi-day unconditional promise and a one-year guarantee – so you’re guaranteed outright genuine feelings of serenity following your buy! 
stay tuned, there's more to come!!!
          </p>
          <NavLink to="/contact" className="btn btn-outline-primary px-3">
            Contact Us
          </NavLink>
        </div>
        <div className='col-md-6 d-flex justify-content-center'>
          <img src='/assets/images/about.jpg' 
          alt='About Us' height="350vh" width="400vw" />
        </div>
      </div>
      </div>
    </>
  )
}

export default About
