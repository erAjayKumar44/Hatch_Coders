import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Style.css';

const ContactSection = () => {
  const [budget, setBudget] = useState(60000);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    jobTitle: '',
    launchTimeline: '',
    projectDescription: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        {
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          companyName: formData.companyName,
          jobTitle: formData.jobTitle,
          launchTimeline: formData.launchTimeline,
          budget: budget.toLocaleString(),
          projectDescription: formData.projectDescription,
        },
        'YOUR_USER_ID' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          alert('Message sent successfully to er.ajaykumar44@gmail.com!');
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send the message. Please try again later.');
          console.error(error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="contact-section">
        {/* Left Column */}
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <h1>Our expert</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          <h3>Integrate Toward Innovation</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          <h3>Contact Info:</h3>
          <a className="contx" href="tel:+91-9888757779">
            <p>
              <img src="icn1.png" alt="img"></img>&nbsp; +91-9888757779
            </p>
          </a>
          <a className="contx" href="mailto:hello@hatchcoders.com">
            <p>
              <img src="icn3.png" alt="img"></img>&nbsp; hello@hatchcoders.com
            </p>
          </a>
          <a className="contx" href="#">
            <p>
              <img src="icn2.png" alt="img"></img>&nbsp; E -45 phase 8, Mohali, Punjab (India)
            </p>
          </a>
        </div>

        {/* Right Column */}
        <div className="contact-right">
          <h2>Let's Get to Know You</h2>
          <form onSubmit={sendEmail}>
            <div className="form-group flx-frm">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="form-input"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                className="form-input"
                onChange={handleChange}
              />
            </div>

            <div className="form-group flx-frm">
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="form-input"
                onChange={handleChange}
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company (or Project) Name"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <select
                name="jobTitle"
                className="form-input"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Job Title
                </option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <select
                name="launchTimeline"
                className="form-input"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  When do you want to launch a solution?
                </option>
                <option value="Immediately">Immediately</option>
                <option value="1-3 Months">1-3 Months</option>
                <option value="3-6 Months">3-6 Months</option>
                <option value="6+ Months">6+ Months</option>
              </select>
            </div>
            <div className="form-group">
              <label className="budget-label">
                Budget: ${budget.toLocaleString()}
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="budget-range"
                />
              </label>
            </div>
            <div className="form-group">
              <textarea
                name="projectDescription"
                placeholder="About Project"
                className="form-textarea"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="form-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
