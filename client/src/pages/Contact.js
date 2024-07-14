import React from 'react'
import Layout from '../components/Layouts/Layout.js'
import { MdSupportAgent , MdOutlineEmail, MdOutlinePhoneInTalk} from "react-icons/md";

const Contact = () => {
  return (
    <Layout>
      <div className='row contacts'>
        <div className='col-md-6'>
          <img src='/images/contactus.jpeg' alt='Contacts' style={{width:"100%"}}/>
        </div>
        <div className='col-md-4'>
          <h1 className='bg-dark p-2 text-white text-center'>CONTAT US</h1>
          <p className='text-justify mt-2'>
            Any quary of info about product? feel free to call anytime we 24x7 available
          </p>
          <p className='mt-3'>
            <MdOutlineEmail/> : www.help@ecommerce.com
          </p>
          <p className='mt-3'>
            <MdOutlinePhoneInTalk/> : 012-3456789
          </p>
          <p className='mt-3'>
            <MdSupportAgent/> : 1800-000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
