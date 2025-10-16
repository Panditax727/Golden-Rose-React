import React from "react";
import { Link } from "react-router-dom";

function SideBarAdmin() {
  return (
    <div className="d-flex">
        <aside className="p-3" style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
        <nav className="nav nav-pills flex-column mb-auto">
            <ul className="nav nav-pills flex-column">
            <li className="nav-item">
                <Link to="/administrador" className="nav-link active">
                <i className="bi bi-grid me-2"></i> Dashboard
                </Link>
            </li>
            <li>
                <Link to="/pedidos" className="nav-link text-dark">
                <i className="bi bi-bag me-2"></i> Ordenes
                </Link>
            </li>
            <li>
                <Link to="/inventario" className="nav-link text-dark">
                <i className="bi bi-box-seam me-2"></i> Productos
                </Link>
            </li>
            <li>
                <Link to="/reportes" className="nav-link text-dark">
                <i className="bi bi-clipboard-data me-2"></i> Categorías
                </Link>
            </li>
            <li>
                <Link to="/empleados" className="nav-link text-dark">
                <i className="bi bi-people me-2"></i> Usuarios
                </Link>
            </li>
            <li>
                <Link to="/clientes" className="nav-link text-dark">
                <i className="bi bi-person-lines-fill me-2"></i> Reporte
                </Link>
            </li>
            </ul>
        </nav>

        <section className="sidebar-footer px-2">
            <hr />
            <ul className="nav nav-pills flex-column">
            <li>
                <a href="#perfil" className="nav-link text-dark">
                <i className="bi bi-person"></i> Perfil
                </a>
            </li>
            </ul>
        </section>
        </aside>

    </div>
  );
}

export default SideBarAdmin;
