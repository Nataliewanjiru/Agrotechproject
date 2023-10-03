import React, { useState } from "react";
import livestockcss from './livestocks.css';

function Livestock() {
  const [livestockType, setLivestockType] = useState("");
  const [weaningDate, setWeaningDate] = useState("");
  const [slaughterDate, setSlaughterDate] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({
      livestockType,
      weaningDate,
      slaughterDate,
      quantity
    });
  };

  return (
        <div className="main" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
          <main>
            <h1 style={{ fontSize: '2em', color: '#333' }}>Livestock Management</h1>
        <section>
          <div className="">
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
              Slaughter date, Quantity{" "}
            </p>
          </div>
        </section>
        <section>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="livestockType">Livestock Type:</label>
              <input
                type="text"
                id="livestockType"
                value={livestockType}
                onChange={(e) => setLivestockType(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weaningDate">Weaning Date:</label>
              <input
                type="date"
                id="weaningDate"
                value={weaningDate}
                onChange={(e) => setWeaningDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="slaughterDate">Slaughter Date:</label>
              <input
                type="date"
                id="slaughterDate"
                value={slaughterDate}
                onChange={(e) => setSlaughterDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <button type="submit">Add Livestock</button>
          </form>
        </section>
        <section>
          <div className="livestock-images">
            <img src="https://i.pinimg.com/564x/b1/1b/20/b11b20effe9cd6537b4491ada98f44b5.jpg" alt="Holstein-Friesian"/>
            <p>
              Holstein-Friesian
              Advantages: Known for the highest milk production among all dairy breeds. They are well-suited for intensive dairy farming.
            </p>
            <img src="https://i.pinimg.com/564x/4b/7d/60/4b7d60249acad9a7dda997d1b024ae8a.jpg" alt="New Zealand White"/>
            <p>
              New Zealand White
              Advantages: Known for their rapid growth, high meat-to-bone ratio, and good feed conversion. They have a calm temperament.
            </p>
            <img src="https://i.pinimg.com/564x/11/76/0c/11760c22517d44d14d6d029619517403.jpg" alt="Rhode Island Red"/>
            <p>
              Rhode Island Red
              Advantages: Known for excellent egg production and hardiness. They are good for backyard flocks and small farms.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Livestock;
