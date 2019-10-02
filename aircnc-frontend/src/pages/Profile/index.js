import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';
import {Link} from 'react-router-dom';


export default function Profile() {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user')
            const response = await api.get('/profile', {
                headers: { user_id }
            })

            setSpots(response.data);

        }
        loadSpots();
    }, [])
 
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot.id}>
                    <header style={{backgroundImage: `url(${spot.thumbnail_url})`}}/>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia`: 'Gratuito'}</span>
                    </li>
                ))}
            </ul>
            <Link to="/new">
                        <button className="btn">Cadastrar novo SPOT</button>
            </Link>
        </>
    )
}