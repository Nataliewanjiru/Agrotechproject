import React, { useState,useEffect } from 'react';
import './crop.css';
import {useParams } from "react-router-dom";


function Crop() {
  const[data, setData]=useState([])

  const{userId}= useParams();

  useEffect(() => {
    fetch("https://agrotechbackend.onrender.com/crops")
    .then((res) => res.json())
    .then((data) => setData(data))
  }, [])

  let newData= data.filter(item=>item.farm_id == userId)
  
  const crops = [
    {
      name: 'Wheat (Triticum spp)',
      image:'https://i.pinimg.com/564x/5b/fc/2e/5bfc2e2b9f59e1718f4f23fbda02ab43.jpg',
      description: 'Wheat is a cereal grain that is a staple food for a large portion of the worlds population. It is a grass crop that produces dry, one-seeded fruits known as kernels. Wheat grains are typically ground into flour, which is used to make a wide variety of foods such as bread, pasta, and pastries.',
    },
    {
      name: 'Rice (Oryza sativa)',
      image:'https://i.pinimg.com/564x/57/f3/46/57f34607f72a1d0a2cb29389b22338e9.jpg',
      description: 'Rice is a staple food for over half of the worlds population. It is a type of grass (a member of the Poaceae family) that produces small, round, edible grains. There are thousands of varieties of rice, each with its own unique flavor, texture, and cooking properties. It is a crucial component of diets in many countries and is used in a wide range of culinary dishes.',
    },
    {
      name: 'Maize (Zea mays)',
      image:'https://i.pinimg.com/564x/3d/c2/39/3dc239a02e62e49b043edabd635babec.jpg',
      description: 'Maize, commonly known as corn, is a cereal grain that is a staple food in many parts of the world. It is a tall, annual plant with large, narrow leaves and produces ears containing the grain, which are commonly known as corn kernels. Maize is a versatile crop used for various purposes, including human consumption, animal feed, and industrial applications.',
    },
    {
      name: 'Potatoes (Solanum tuberosum)',
      image:'https://i.pinimg.com/564x/c8/6f/7e/c86f7e9b3027359769262fd79fe5e25e.jpg',
      description: 'Potatoes are starchy tuberous crops that belong to the Solanaceae family. They are one of the most widely consumed vegetables in the world. Potatoes come in various shapes, sizes, and colors, including red, yellow, and russet varieties. They are a versatile ingredient and can be prepared in numerous ways, including boiling, baking, frying, and mashing.',
    },
    {
      name: 'Tomatoes (Solanum lycopersicum)',
      image:'https://i.pinimg.com/564x/8b/e5/72/8be572696f2c2bfb043b7f91af555bb9.jpg',
      description: 'Tomatoes are a popular fruit that is often used as a vegetable in cooking. They belong to the nightshade family, Solanaceae, and are native to western South America. Here are some key facts about tomatoes',
    },
    {
      name: 'Cabbage (Brassica oleracea var. capitata)',
      image:'https://i.pinimg.com/564x/c0/b1/e8/c0b1e82d197d6b93dddbd382dc8a45a6.jpg',
      description: 'Cabbage is a leafy green or purple biennial plant belonging to the Brassicaceae family. It is widely cultivated for its dense-leaved heads, which are used in various culinary preparations. Here are some key facts about cabbage',
    },
  ];

  const [cropRecords, setCropRecords] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newRecord = {
      cropType: formData.get('cropType'),
      plantingDate: formData.get('plantingDate'),
      weedingDate: formData.get('weedingDate'),
      harvestDate: formData.get('harvestDate'),
      harvestQuantity: formData.get('harvestQuantity'),
      acreage: formData.get('acreage')
    };
    setCropRecords([...cropRecords, newRecord]);
  }

  return (
    <div className="crop">
      <main>
        <h1>Crop Management</h1>
        <section>
          <div className="text">
            <p>Crops are plants that are cultivated and harvested for various purposes, primarily for human consumption or for use as animal feed, fiber, or industrial raw materials. They are a fundamental component of agriculture and play a crucial role in providing food security and sustaining economies worldwide</p>
          </div>
        </section>
        
        <section>
          <h2>Featured Crops</h2>
          <div className="crop-list">
            {crops.map((crop, index) => (
              <div className="crop-card" key={index}>
                <h3>{crop.name}</h3>
                <img src={crop.image} alt={crop.name} />
                <p>{crop.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Record Form</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Crop Type:
              <input type="text" name="cropType" required />
            </label>
            <br />
            <label>
              Planting Date:
              <input type="date" name="plantingDate" required />
            </label>
            <br />
            <label>
              Weeding Date:
              <input type="date" name="weedingDate" required />
            </label>
            <br />
            <label>
              Harvest Date:
              <input type="date" name="harvestDate" required />
            </label>
            <br />
            <label>
              Harvest Quantity:
              <input type="number" name="harvestQuantity" required />
            </label>
            <br />
            <label>
              Acreage:
              <input type="number" name="acreage" required />
            </label>
            <br />
            <button type="submit">Submit Record</button>
          </form>
        </section>

        <section>
          <h2>Records</h2>
          <ul className='cropList'>
            {newData.map((record, index) => (
              <li key={index}>
                <span><strong>Crop Type:</strong> {record.cropType},</span>{' '}
                <span><strong>Planting Date:</strong> {record.planting},</span>{' '}
                <span><strong>Weeding Date:</strong> {record.weeding},</span>{' '}
                <span><strong>Harvest Date:</strong> {record.harvest},</span>{' '}
                <span><strong>Acreage:</strong> {record.acreage}</span>
                
              </li>
            ))}
          </ul>
        </section>

      </main>
      <footer>
                <p>&copy; Copyright Agro Tech 2023. Rental Agreement. Terms of service. Privacy policy.</p>
       </footer>
    </div>
  );
}

export default Crop;
