import React, { useState } from "react";


export default function New() {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    function handleSubmit() {

    }
    return (
        <form onSubmit={handleSubmit} >
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

            <label htmlFor="techs">Valor da diaria * <span>(em branco para gratuito)</span></label>
            <input type="text"
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)} />

                <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}