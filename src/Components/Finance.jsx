import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Finance.css';

const Finance = () => {
    const [finances, setFinances] = useState([]);
    const[farm,setFarm]=useState([])
    const {userId}=useParams()

    useEffect(() => {
        // Fetch finance data from the provided API link
        fetch('https://agrotechbackend.onrender.com/finances')
            .then((response) => response.json())
            .then((data) => {
                setFinances(data);
            });
            
    }, []);

    let newData = finances.filter(item => item.farm_id == userId);
    return (
        <div className="finance-container">
            <img src="https://i.pinimg.com/564x/4e/e8/de/4ee8de1944a5f1f7daf247a292319f76.jpg" alt="Farm Image 1" className="small-image" />
            <h1>Farmer's Finance Overview</h1>
            <p>
                Welcome to the finance section. View your financial data and track the income, budget, and losses.
            </p>
            <h2>Finance Table</h2>

            <table className="finance-table">
                <thead>
                    <tr>
                        <th>Farm ID</th>
                        <th>Income</th>
                        <th>Budget</th>
                        <th>Loss</th>
                    </tr>
                </thead>
                <tbody>
                    {newData.map((finance) => (
                        <tr key={finance.id}>
                            <td>{finance.id}</td>
                            <td>{finance.farm_id}</td>
                            <td>${finance.income}</td>
                            <td>${finance.budget}</td>
                            <td>${finance.loss || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Finance;
