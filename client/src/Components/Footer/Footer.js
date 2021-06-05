import React from 'react';
import footerLogo from './footerLogo.jpg';
import './Footer.css';

function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row align-items-center upper_footer">
                <div className="col-4 offset-1 col-sm-3 offset-sm-1">
                    <img src={footerLogo} />
                </div>
                <div className="col-4 offset-1 col-sm-3 offset-sm-1">
                    <p>Program: MSIT</p>
                    <div>Institutes:</div>
                    <ol className="list-unstyled">
                        <li>IIIT-H</li>
                        <li>JNTU-H</li>
                    </ol>
                </div>
                <div className="col-4 offset-1 col-sm-3 offset-sm-1">
                    <p>Quick Links</p>
                    <ul className="list-unstyled">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Refund/Cancellation</li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid row">
                <div className="col-12 col-sm-12 text-center btm">
                    Consortium of Institutions of Higher Learning, IIIT Campus, Gachibowli, Hyderabad - 500032 Phone: 040-66531342 Mobile: +91 7799834583,+91 7799834585 E-mail: enquiries@msitprogram.net
                </div>
            </div>
        </div>
    )
}

export default Footer
