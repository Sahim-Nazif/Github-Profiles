import React from 'react'
import {FiGithub} from 'react-icons/fi'
const Footer = () => {

    const footerYear=new Date().getFullYear()

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
         <FiGithub className=' text-3xl'/>
        
        <p>Copyright &copy;{footerYear}</p>
    </footer>
  )
}

export default Footer