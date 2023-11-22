import React from "react";
import './App.css'
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
    <div className="home-container">
      <Navbar/>
      <div className="Intro">
      <h1>Agricultural Internet Portal</h1>
      <p>
        We provide tools, resources, and information to help farmers succeed in
        their agricultural endeavors.
      </p>
       <button>REGISTER AND SEE MORE</button>
      </div>
    </div>
    <div className="home-section-two">
      <div className="second-description">
      <h1>The Website will help you manage<strong>Your Farm</strong></h1>
      <p>By registering a personal account on the portal you can:</p>
      <ul>
        <li>Keep up with the changes on your farm</li>
        <li>Keep track of your livestock</li>
        <li>Keep track of your crops</li>
        <li>Keep track of your employees</li>
        <li>Keep track of your equipments</li>
        <li>Get access to the latest news and updates</li>
      </ul>
       <button>REGISTER</button>
       </div>
       <div className="second-picture">
        <div className="diamond"></div>
        <div className="triangle"></div>
        <img src="https://images.pexels.com/photos/2203683/pexels-photo-2203683.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
       </div>
    </div>
      <div className="third-section">
        <h1>Our main <strong>advantages</strong></h1>
        <div className="box"></div>
        <div className="services">
        <div>
          <h2>Convenience</h2>
          <p>You have everything at hand.</p>
        </div>
        <div>
          <h2>Efficiency</h2>
          <p>We make sure that all tasks are done efficiently.</p>
        </div>
        <div>
          <h2>Security</h2>
          <p>All data is secured.</p>
        </div>
      </div>
      <div className="triangle2"></div>
      </div>
      <div className="fourth-parent">
      <h1>The portal facilitates interaction between <strong>famers</strong> and their <strong>farms</strong></h1>
        <div className="fourth-section">
            <div className="first">
              <h1>Magament of Farm products</h1>
              <p>This portal allows farmers to manage their produce,equipments and even workers</p>
              <Link to="/about"> LEARN MORE</Link>
            </div>
            <div className="second">
              <h1>Get in touch with advisors from any point</h1>
              <p>This platform allows you to interact with other farmers and advisors and get quick help you might need at the comfort of your homw</p>
              <Link to="/about"> LEARN MORE</Link>
              <div className="triangle67"></div>
              <div className="triangle68"></div>
            </div>
        </div>
      </div>
      <div className="fifth-parent">
      <h1>Products you can <strong>manage</strong></h1>
        <div className="fifth-section">
          <div>
           <img src="https://images.pexels.com/photos/7125441/pexels-photo-7125441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
           <h2>Crops</h2>
           <div className="p">
           <p>Revolutionize crop management effortlessly! Our website offers an advanced system to track and manage your crops effectively. Access real-time insights, streamline cultivation processes, and optimize yields with our intuitive crop monitoring platform</p>
          </div>
          </div>
          <div>
           <img src="https://images.pexels.com/photos/4492264/pexels-photo-4492264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
           <h2>Livestock</h2>
           <div className="p">
           <p>Enhance your farming efficiency! Our website offers a comprehensive livestock tracking system, providing real-time monitoring and data management for your animals. Simplify record-keeping and optimize care with ease and precision</p>
          </div>
          </div>
          <div>
           <img src="https://images.pexels.com/photos/102723/pexels-photo-102723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
           <h2>Equipments</h2>
           <div className="p">
           <p>Maximize equipment management! Our website delivers a streamlined system for tracking and organizing your farming equipment. Seamlessly monitor usage, schedule maintenance, and optimize efficiency for a more productive farming operation</p>
          </div>
          </div>
          <div>
           <img src="https://images.pexels.com/photos/17764754/pexels-photo-17764754/free-photo-of-couple-farming-with-hoes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
           <h2>Workers</h2>
           <div className="p">
           <p>Empower your workforce! Our website provides a seamless platform to manage farm labor efficiently. Easily track worker schedules, tasks, and performance, enhancing coordination and productivity across your agricultural operations.</p>
          </div>
          </div>
        </div>
      </div>
      <div className="sixth-parent">
        <div className="sixth-section">
          <div>
            <h1>Get in <strong>touch</strong> with us for any further question</h1>
            <form className="contactForm" >
                <div className="inputName2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"  required/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="name">Message:</label>
                    <textarea className="message" id="message" name="message" rows="4"/>
                </div>
                    <button type="submit">Send Email</button>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
