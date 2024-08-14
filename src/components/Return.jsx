import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Return.css'; // Import the common CSS file

function Return() {
    return (
        <div>
        <div className="tc-container">
            <center><h2 className="tc-title">RETURN AND REFUND POLICIES</h2></center>
            <p className="tc-paragraph">1. Failure of the User to return the Product by the specified date shall invite a daily penalty of Rs.500.</p>
            <p className="tc-paragraph">2. Failure to return the products after 7-10 days shall result in a formal police complaint followed by a legal notice to the client.</p>
            <p className="tc-paragraph">3. The Product(s) shall be returned to the Site Owner in the same packaging in which it was delivered.</p>
            <p className="tc-paragraph">4. The product(s) shall be handed over only to the person authorized by the Site Owner for the purpose of returns.</p>
            <p className="tc-paragraph">5. The Product(s) shall be properly packed and sealed. If the Product(s) is/are being returned without the assistance of the person authorized by the Site Owner, then any damage sustained during such return shall be the sole liability of the User.</p>
            <p className="tc-paragraph">6. Site Owner shall refund the money if the products delivered are damaged within 25 working days.</p>
            <p className="tc-paragraph">7. Site Owner shall refund the money if the products are delivered later than the requested occasion date within 25 working days.</p>
            <p className="tc-paragraph">8. The refundable security deposit will only be fully refunded within 25 working days after the User returns the products in good condition and no major damages.</p>
            <p className="tc-paragraph">9. The amount shall be refunded if the order is cancelled by the Site Owner.</p>
            <p className="tc-paragraph">10. Partial refund will be provided if the order is cancelled by the User.</p>
            
        </div><br></br><br></br>
        <Footer/>
        </div>
    );
}

export default Return;
