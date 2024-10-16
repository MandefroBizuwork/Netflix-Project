import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "@mui/material";
function Footer () {
  return (
    <div className="footer-wraper">
  
      
        <ul className='col'>
          <li>
            <Link className='footer-link' to=""><FacebookIcon/></Link>
          </li>
          <li>
            <Link className='footer-link' to=""><InstagramIcon/></Link>
          </li>
          <li>
            <Link className='footer-link' to=""><YouTubeIcon/></Link>
          </li>
        
        </ul>
     
      
        <ul className='col'>
          <li>
            <Link className='footer-link' to="">
             Help center
            </Link>
          </li>
          <li>
            <Link className='footer-link' to="">
             Jobs
            </Link>
          </li>
          <li>
            <Link className='footer-link' to="">
             Cookies
            </Link>
          </li>
        </ul>
        <ul className='col'>
          <li>
            <Link  className='footer-link' to="">
            Gift cards 
            </Link>
          </li>
          <li>
            <Link className='footer-link' to="">
           Terms of use
            </Link>
          </li>
          <li>
            <Link className='footer-link' to="">
            Corporate info
            </Link>
          </li>
        </ul>
        <ul className='col'>
          <li>
            <Link className='footer-link' to="">
             Media center
            </Link>
          </li>
          <li>
            <Link className='footer-link' to="">
             Privacy
            </Link>
          </li>
          <li>
            <Link className='footer-link' to="">
             Contact us
            </Link>
          </li>
        </ul>
       <h2>&copy; 2024 netflix</h2> 
      </div>
 

  )
}

export default Footer
