import React, { useState, useEffect } from 'react';
import './Equipments.css'

const Equipment = () => {
    const [equipments, setEquipments] = useState([]);
    const [filteredEquipments, setFilteredEquipments] = useState([]);
    const [farmIdFilter, setFarmIdFilter] = useState('');
    const [noEquipmentFound, setNoEquipmentFound] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://agrotechbackend.onrender.com/equipments');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setEquipments(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    const handleFilterChange = (event) => {
        setFarmIdFilter(event.target.value);
    };

    const handleFilterSubmit = (event) => {
        event.preventDefault();
        const filtered = equipments.filter(
            (equipment) => equipment.farm_id === parseInt(farmIdFilter)
        );

        setFilteredEquipments(filtered);
        setNoEquipmentFound(filtered.length === 0);
    };

    return (
        <div className="equipment-list">
            <h1>Equipment List</h1>
            <form onSubmit={handleFilterSubmit}>
                <label>
                    Filter by Farm ID:
                    <input
                        type="text"
                        value={farmIdFilter}
                        onChange={handleFilterChange}
                    />
                </label>
                <button type="submit">Search</button>
            </form>
            {noEquipmentFound ? (
                <p>No equipment found for the farm ID.</p>
            ) : (
                <ul>
                    {filteredEquipments.map((equipment) => (
                        <li key={equipment.id}>
                            <h2>Equipment Type: {equipment.equipment_type}</h2>
                            <p>Maintenance Schedule: {equipment.maintenance_schedule}</p>
                            <p>Farm ID: {equipment.farm_id}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Equipment;
