import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './livestocks.css';
import Carousel from "./carousel";
import axios from "axios";

function Livestock() {
  const { userId } = useParams();
  
  const [formData, setFormData] = useState({
    farm_id: "",
    livestock_type: "",
    weaning_date: "",
    slaughter_date: "",
    quantity: "",
});

  
  const { farm_id, livestock_type, weaning_date,  slaughter_date,  quantity } = formData;
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch("https://agrotechbackend.onrender.com/livestocks")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, []);

  let newData = data.filter(item => item.farm_id == userId);
 
   const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
        const response = await axios.post("https://agrotechbackend.onrender.com/livestock", formData);
        console.log(response.data); // Handle the response from the backend
    } catch (error) {
        console.error(error);
    }
    // Clear the form inputs after submission
    setFormData({
        farm_id: "",
        livestock_type: "",
        weaning_date: "",
        slaughter_date: "",
        quantity: "",
    });
}

  return (
    <div className="main" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ fontSize: '2em', color: '#333' }}>Livestock Management</h1>
        <div className="carousel">
        <Carousel/>
        </div>
        <main>
        <section>
          <div className="Text">
            <p>
              Welcome to a world where livestock aren't just animals; they're
              the heartbeat of a sustainable and thriving ecosystem. Together,
              let's forge a future where our partnership with these incredible
              creatures leads to prosperity, sustainability, and a higher
              quality of living for all.
            </p>
            <p>
              At the heart of our agricultural heritage lies the steadfast
              presence of livestock. These magnificent creatures have been our
              partners in sustenance and prosperity for generations. From the
              gentle Holstein-Friesians, masters of milk production, to the
              hardy Rhode Island Reds, champions of backyard flocks, each breed
              contributes to a tapestry of life and livelihood
            </p>
            <p>
              Explore our collection of resources that help you manage your
              livestock records including: Livestock type, Weaning date,
              Slaughter date, Quantity.{" "}
            </p>
          </div>
        </section>
        <section>
          <form onSubmit={handleFormSubmit}>
          <div className="form-group">
              <label htmlFor="slaughterDate">Farm ID:</label>
              <input
                type="number"
                id="farmId"
                value={farm_id}
                onChange={(e) => setFormData({ ...formData, farm_id: e.target.value })}
              />
           </div>
            <div className="form-group">
              <label htmlFor="livestockType">Livestock Type:</label>
              <input
                type="text"
                id="livestockType"
                value={livestock_type}
                onChange={(e) => setFormData({ ...formData, livestock_type: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weaningDate">Weaning Date:</label>
              <input
                type="date"
                id="weaningDate"
                value={weaning_date}
                onChange={(e) => setFormData({ ...formData, weaning_date: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="slaughterDate">Slaughter Date:</label>
              <input
                type="date"
                id="slaughterDate"
                value={slaughter_date}
                onChange={(e) => setFormData({ ...formData, slaughter_date: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              />
            </div>
            <button type="submit">Add Livestock</button>
          </form>
          <div className="added-livestocks">
            <h2>Added Livestocks</h2>
            <ul className="livestockList">
              {newData.map((livestock, index) => (
                <li key={index} className="livestock-item">
                  <span>Type: {livestock.livestock_type}</span>
                  <span>Weaning Date: {livestock.weaning_date}</span>
                  <span>Slaughter Date: {livestock.slaughter_date}</span>
                  <span>Quantity: {livestock.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <div className="livestock-images">
            <div className="Cow">
            <img src="https://i.pinimg.com/564x/b1/1b/20/b11b20effe9cd6537b4491ada98f44b5.jpg" alt="Holstein-Friesian"/>
            <p>
              Holstein-Friesian
              Advantages: Known for the highest milk production among all dairy breeds. They are well-suited for intensive dairy farming.
            </p>
            </div>
            <div className="Rabbit">
            <img src="https://i.pinimg.com/564x/4b/7d/60/4b7d60249acad9a7dda997d1b024ae8a.jpg" alt="New Zealand White"/>
            <p>
              New Zealand White
              Advantages: Known for their rapid growth, high meat-to-bone ratio, and good feed conversion. They have a calm temperament.
            </p>
            </div>
            <div className="Chicken">
            <img src="https://i.pinimg.com/564x/11/76/0c/11760c22517d44d14d6d029619517403.jpg" alt="Rhode Island Red"/>
            <p>
              Rhode Island Red
              Advantages: Known for excellent egg production and hardiness. They are good for backyard flocks and small farms.
            </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
                <p>&copy; Copyright Agro Tech 2023. Rental Agreement. Terms of service. Privacy policy.</p>
       </footer>
    </div>
  );
}

export default Livestock;
