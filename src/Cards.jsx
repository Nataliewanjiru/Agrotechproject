import { Link, useParams } from "react-router-dom";
import './Card.css';

const Cards = () => {
 const { userId} = useParams();



    return (
        <>
        <div className="Cards">
        <h1>Welcome</h1>
        <ul>
            <li>
            <Link to={`/crops/${userId}`}>Crops</Link>
            </li>
            <li>
             <Link to={`/livestocks/${userId}`}>Livestocks</Link>
           </li>
           <li>
            <Link to={`/finances/${userId}`}>Finance</Link>
           </li>
           <li>
            <Link to={`/equipments/${userId}`}>Equipments</Link>
            </li>
        </ul>
        </div>
        </>
    )
}

export default Cards;