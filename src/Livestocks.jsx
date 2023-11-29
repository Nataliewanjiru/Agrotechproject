import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './livestocks.css';
import Carousel from "./carousel";
import axios from "axios";
import Navbar from "./Navbar";

function Livestock() {
  const { userId } = useParams();
  
  const [formData, setFormData] = useState({
    farm_id: "",
    livestock_type: "",
    weaning_date: "",
    slaughter_date: "",
    quantity: "",
    image:"",
    information:""
});

  
  const { farm_id, livestock_type, weaning_date,  slaughter_date,  quantity ,image ,information} = formData;
  const [data, setData] = useState([]);
  const[animal,setAnimal] = useState([])
  

  useEffect(() => {
    fetch("http://127.0.0.1:5909/livestocks")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, []);

  

  let newData = data.filter(item => item.farm_id == userId);
 
   const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
        const response = await axios.post("http://127.0.0.1:5909/livestock", formData);
        console.log(response.data);
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
        image:"",
        information:"",
    });
}

const cardClicked = (item)=>{ 
  setAnimal([])
  setAnimal(item)
}

  return (
    <div className="liveStockBody">
    <div className="firstSection">
    <Navbar/>
    <h1 style={{ fontSize: '2em', color: 'white' }}>Livestock Management System</h1>
    </div>
    <div className="main" style={{ fontFamily: 'Arial, sans-serif'}}>
        <div className="secondSection">
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
          </div>
        </section>
        <section>
          <div className="added-livestocks">
            <h2>Added Livestocks</h2>
            <div>
              {animal && (<div className="selectedAnimal" key={animal.id}>
                <div className="first">
                  <img className="selectedImage" src={animal.image}/>
                </div>
                <div className="second">
                    <h2 className="one">{animal.livestock_type}</h2>
                    <h2 className="two">{animal.details}</h2>
                    <h2 className="two"><i>Weaning Date:</i> {animal.weaning_date}</h2>
                    <h3 className="two"><i>Slaughter Date:</i> {animal.slaughter_date}</h3>
                    <h4 className="four"><i>Quantity: </i>{animal.quantity}</h4>
                    </div>
                  </div>)
                }
            </div>
            <ul className="livestockList">
              {data.map((livestock, index) => (
                <li key={index} className="livestock-item" onClick={()=>{cardClicked(livestock)}}>
                   <img className="five"src={livestock.image}/>
                  <span className="one">Type: {livestock.livestock_type}</span>
                  <span className="four">Quantity: {livestock.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
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
  <div className="form-group">
  <label htmlFor="image">ImageUrl:</label>
  <input
    type="text"
    id="image"
    value={image}
    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
  />
</div>
<div className="form-group">
  <label htmlFor="info">Information about the animal(s):</label>
  <input
    type="text"
    id="info"
    value={information}
    onChange={(e) => setFormData({ ...formData, information: e.target.value })}
  />
</div>
  <button type="submit">Add Livestock</button>
</form>
        </section>
      </main>
      </div>
    </div>
    </div>
  );
}

export default Livestock;
