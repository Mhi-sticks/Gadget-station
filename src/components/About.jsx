import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="container py-5 my-5">
      <div className="row">
        <div className='col-md-6'>
          <h1 className="text-primary fw-bold mb-4">About Us</h1>
          <p className='lead mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nesciunt minima atque praesentium quidem officia dignissimos beatae facere fugit doloremque. Error, impedit! Eligendi doloremque nobis, necessitatibus inventore numquam eos sequi officiis exercitationem architecto maxime eaque facilis incidunt optio atque excepturi dolor quibusdam rerum, dicta placeat ut! Ducimus quis dolorem necessitatibus sunt sint, alias aperiam earum natus quisquam eligendi maxime nihil eos a dignissimos quia obcaecati illum numquam, voluptatibus, delectus qui nam molestias impedit. Nemo iste molestias eum? Temporibus omnis nihil, id laboriosam eaque quas, quis vel qui ratione ex doloribus recusandae facere quasi reiciendis, fugit ipsum esse rem impedit enim.
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
