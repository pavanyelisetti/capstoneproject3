import React, { useState } from 'react';
import logo from "../assets/images/logo.svg";
import company from "../assets/images/company.svg";
import './cssfile.css';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to a server)
    console.log(formData);
  };

  return (
    <section className="contact">
      <section className="container">
        <div className="threeRow">
          <div className="contactWrapper rowLeft">
            <img src={logo} alt="" srcset="" />
            <h3>PT Dwidasa Samsara Indonesia</h3>

            <ul>
              <li>Ruko Jalur Sutera 29A No. 53</li>
              <li>Alam Sutera Serpang, Tangerang 15323</li>
            </ul>
          </div>
          <div className="contactWrapper connect rowMiddle">
            <p>Contact</p>

            <ul>
              <li>Phone:+62.21.5314.1135</li>
              <li>Fax:+62.21.5314.1135</li>
              <li>Email:community@dwidasa.com</li>
            </ul>
          </div>
          <div className="contactWrapper rowRight">
            <img
              style={{
                height: "100%",
                width: "100%"
              }}
              src={company}
              alt=""
            />
          </div>
        </div>
      </section>
      <br/><br/><br/><br/>
      <div className="contact-page">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      
      <section id="footer">
      <p>Copyrights &copy; 2015 - Dwidasa Samsara Indonesia</p>
      </section>
    </section>
    
  );
}

export default Footer;
