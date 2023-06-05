import React from 'react';
import './Footer.css';

import{Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='section-footer'>
        <div className="container">
            <div className="grid-container">
                <div className="footer-grid-item">
                    <h3>ENFOLD DETROIT</h3>
                    <p>4870 Cass Ave</p>
                    <p>Detroit, mi, United states</p>
                    <p>(555) 389 976</p>
                 <Link to="#" className='test-white'>Detroit@enfold-restaurant.com</Link>
                </div>
                
                <div className="footer-grid-item">
                    <h3>ENFOLD LA.</h3>
                    <p>1818 N vermont Ave</p>
                    <p>Detroit, mi, United states</p>
                    <p>(555) 774 433</p>
                 <Link to="#" className='test-white'>Detroit@enfold-restaurant.com</Link>
                </div>
           
                <div className="footer-grid-item">
                    <h3>ENFOLD SEATTLE</h3>
                    <p>4326 University way Ne</p>
                    <p>seattle, wa, United states</p>
                    <p>(555) 389 888</p>
                 <Link to="#" className='test-white'>Detroit@enfold-restaurant.com</Link>
                </div>

                <div className="footer-grid-item">
                    <h3>ENFOLD DALLAS</h3>
                    <p>11311 Harry Hines BVD</p>
                    <p>Dallas, tx, United states</p>
                    <p>(555) 389 976</p>
                 <Link to="#" className='test-white'>Detroit@enfold-restaurant.com</Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer