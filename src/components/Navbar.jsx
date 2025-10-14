import React from 'react';

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#ff4655" }}>
          <div className="container">
            {/* Logo y nombre */}
            <a className="navbar-brand d-flex align-items-center gap-2" href="#">
              <img
                src="src\assets\icon.png"
                alt="Golden Rose"
                width="48"
                height="48"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px #ffb6c1",
                  background: "#fff",
                  padding: "2px",
                }}
              />
              <span
                style={{
                  fontSize: "1.7rem",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  color: "#FFD700",
                  textShadow: "1px 1px 8px #ffb6c1",
                }}
              >
                Golden Rose
              </span>
            </a>

            {/* Botón menú móvil */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Enlaces */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                <li className="nav-item">
                  <a className="nav-link" href="home.html">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#productos">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto">Contacto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="registro.html">Registrarse</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="login.html">Iniciar sesión</a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary">
                    <i className="bi bi-cart"></i> Carrito (0)
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
