import React, { useState, useMemo } from "react";
import api from '../../services/api';
import camera from '../../assets/camera.svg';
import './styles.css';

export default function New({ history }) {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])


    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem(`user`);
        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);


        await api.post('/spots', data, {
            headers: { user_id }
        })

        history.push('/profile')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label id="thumbnail"
                className={thumbnail ? 'has-thumbnail' : ''}
                style={{ backgroundImage: `url(${preview})` }} >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                <img src={camera} alt="Select img" />
            </label>
            <label htmlFor="company">Empresa *</label>
            <input type="text"
                id="company"
                placeholder="Sua empresa é incrivel"
                value={company}
                onChange={event => setCompany(event.target.value)} />

            <label htmlFor="techs">Tecnologias * <span>(separadas por virgula)</span></label>
            <input type="text"
                id="techs"
                placeholder="As técnologias que usam"
                value={techs}
                onChange={event => setTechs(event.target.value)} />

            <label htmlFor="price">Valor da diaria * <span>(em branco para gratuito)</span></label>
            <input type="text"
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)} />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}