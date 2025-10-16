import React, { useState } from "react";
import FiltroNivelPrecios from "./FiltroNivelPrecios";

function Search() {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("Todas");
    const [selected, setSelected] = useState(""); // ← faltaba este estado

    const handleSearch = () => {
        console.log("Buscando:", query, "| Filtro:", filter, "| Edición:", selected);
    };

    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    return (
        <>
        {/* 🔍 Barra de búsqueda */}
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-search"></i>
            </span>

            <input
                type="search"
                className="form-control"
                placeholder="Vandals, Operator y más..."
                aria-label="Buscar"
                aria-describedby="basic-addon1"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button className="btn btn-primary" type="button" onClick={handleSearch}>
                Buscar
            </button>
        </div>

        <FiltroNivelPrecios/>
        
        
        </>
    );
}

export default Search;
