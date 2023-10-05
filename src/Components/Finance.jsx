import React, { useState, useEffect } from 'react';
import './Finance.css';

const Finance = () => {
    const [finances, setFinances] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch finance data from the provided API link
        fetch('https://agrotechbackend.onrender.com/finances')
            .then((response) => response.json())
            .then((data) => {
                setFinances(data);
                setLoading(false);
            });
    }, []);

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
                    {finances.map((finance) => (
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
            <p>
                Ut ac libero nec lorem efficitur semper. Integer non turpis eget libero elementum malesuada. Vestibulum volutpat, tortor eu vehicula eleifend, urna lectus condimentum est, nec scelerisque dui risus in libero.
            </p>
            <div className="image-below-table">
                <img src="https://i.pinimg.com/564x/42/32/14/423214d64a4655657478bbbe1eeed29e.jpg" alt="Farm Image 3" />
                <p>
                    Suspendisse potenti. Suspendisse euismod nisl eu erat condimentum, nec consequat nisl vehicula. Aliquam facilisis sem non orci facilisis, sit amet gravida odio fermentum.
                </p>
            </div>
        </div>
    );
};

export default Finance;
