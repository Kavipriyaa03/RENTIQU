import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Privacy.css'; // Import the common CSS file

function Privacy() {
    return (
        <div>
        <div className="tc-container">
            <center><h2 className="tc-title">PRIVACY AND POLICIES</h2></center>
            <h4 className="tc-section-heading">1. Our Commitment to Privacy</h4>
            <p className="tc-paragraph">
                FLYROBE is an online fashion portal whereby user(s) can rent/buy clothes and accessories. The FLYROBE website (domain name: www.rentitbae.com) and the mobile apps (Link: play.google.com/apps/testing/com) are owned and operated by AARK World Pvt. Ltd., a private limited company incorporated under the provisions of the Companies Act, 2013, having its registered office at F-80, Basement, Lajpat Nagar-1, New Delhi-110024, INDIA (hereinafter referred to as "Site Owner" "we" "us" or "our"). Any reference to "you" or "your" in this privacy policy ("Privacy Policy"), means you as a user of our site and/or apps ("Site") for accessing, browsing, using the Site and placing orders for renting or purchasing the products (as defined below) listed on the Site ("User").
            </p>
            <h4 className="tc-section-heading">2. Information Collected</h4>
            <p className="tc-paragraph">
                Our Privacy Policy contains provisions regarding collection, storage and handling of personal and non-personal information that you share on the Site. These could include mandatory or voluntary disclosures that you make while and for using the Site. Personal Information is data that can be used to uniquely identify or contact a single person ("Personal Information"). Personal Information for the purposes of this Privacy Policy shall include, but not be limited to, your name, address, telephone number, date of birth, gender, e-mail address, images, etc. provided by you whilst using the Site and/ or availing the Services.
            </p>
            <h4 className="tc-section-heading">3. Cookies</h4>
            <p className="tc-paragraph">
                Cookies are small text files that are stored on the hard drive of the User’s computer and are used for record-keeping purposes. Use of cookies makes web surfing easier by performing certain functions such as saving your Passwords, your personal preferences regarding your use of the particular Web site and to make sure you don’t see the same ad repeatedly.
            </p>
            <h4 className="tc-section-heading">4. Sharing of Information</h4>
            <p className="tc-paragraph">
                For any payments on the Site, the Site Owner uses online payment gateway operated by third party and the information that you provide at the time of placing an Order on the Site is held and stored with third party payment gateway operator authorised at multiple points. The payment gateway operator may also have access to your online payment history/details in relation to the Orders that you place on the Site. These payment gateways are digitally encrypted, thereby providing the highest possible degree of privacy and care available, currently. Whilst we are unable to guarantee 100% (one hundred percent) security, this makes it hard for a hacker to decrypt your details.
            </p>
            <h4 className="tc-section-heading">5. Security Practices</h4>
            <p className="tc-paragraph">
                The Site Owner strives to ensure the security, integrity protection and privacy of your Personal Information against unauthorized access or unauthorized alteration, disclosure or destruction. We follow stringent security techniques and requirements for handling sensitive and Personal Information. These techniques and requirements are fully compliant with the guidelines set forth under law. Our servers are accessible only to authorized personnel. Your information logged under this Privacy Policy is shared with respective personnel only on need to know basis and/ or to provide the services you have requested.
            </p>
            <h4 className="tc-section-heading">6. Your Consent</h4>
            <p className="tc-paragraph">
                By using our site, you consent to our privacy policy. This Privacy Policy should be at all times read along with the Terms and Conditions and the Policies of the Site. The Privacy Policy applies to all information, including Personal Information and Account Information. By using the Services, you agree and acknowledge that your Personal Information may be transferred across national boundaries and stored and processed in any the country.
            </p>
            <h4 className="tc-section-heading">7. Changes to Privacy Policy</h4>
            <p className="tc-paragraph">
                We reserve the right to revise, amend or modify this policy at any time and in any manner it pleases. Any change or revision will be posted here.
            </p>
            
        </div><br></br><br></br>
        <Footer/>
        </div>
    );
}

export default Privacy;
