import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from '../assets/icon.png';
import "../assets/css/style.css";

function Carrito() {
  return (
    <>
      <main className="container my-5" id="contacto">
        <div className="row justify-content-center">

          {/* Carrito */}
          <div className="card col-lg-8 p-1 m-3 rounded-0 shadow-sm">
            <h5 className="m-1 p-1">Mi Carrito</h5>

            {/* Producto */}
            <article className="cart-item d-flex align-items-center justify-content-between border rounded-3 p-3 mb-3 shadow-sm bg-white m-2">
              <div className="d-flex align-items-center">
                {/* Imagen del producto */}
                <figure className="me-3 mb-0">
                  <img
                    src="https://media.valorant-api.com/weaponskinlevels/2ecb0e86-4a14-b33b-8fe1-db96f2c3aa69/displayicon.png"
                    alt="skin 1"
                    className="img-fluid rounded"
                    width="200"
                  />
                </figure>

                {/* Info */}
                <div>
                  <h5 className="mb-1 fw-semibold text-dark">Tigris Operator</h5>
                  <button className="btn btn-light btn-sm fw-bold text-primary rounded-3 shadow-sm">
                    Eliminar
                  </button>
                </div>
              </div>

              <div>
                <s className="text-secondary me-1">$15.990</s>
                <p className="mb-0 text-dark">$12.900</p>
              </div>

              <div>
                <label htmlFor="cantidad1" className="visually-hidden">Cantidad</label>
                <select id="cantidad1" className="form-select w-auto">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </article>

            {/* Aquí puedes duplicar los otros productos cambiando los ids del select */}
          </div>

          {/* Resumen de compra */}
          <section className="card shadow-sm border-0 p-3 m-3" style={{ maxWidth: "22rem" }}>
            <div className="card-body">
              <h6 className="card-title mb-4 fw-bold text-center text-dark border-bottom pb-2">
                Resumen de compra
              </h6>

              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item d-flex justify-content-between border-0 px-0 py-1">
                  <span>Skins (3)</span>
                  <span>
                    <s className="text-secondary me-1">$97.970</s>
                    <strong style={{ color: "#f5c542" }}>$61.700</strong>
                  </span>
                </li>

                <li className="list-group-item d-flex justify-content-between border-0 px-0 py-1">
                  <span>Envíos (1)</span>
                  <span>$1.490</span>
                </li>

                <li className="list-group-item d-flex justify-content-between border-0 px-0 py-1">
                  <span>Comisión de Riot</span>
                  <span>$7.409</span>
                </li>
              </ul>

              {/* Cupón */}
              <div className="mb-4">
                <label className="form-label fw-semibold" style={{ color: "#f5c542" }}>
                  ¿Tienes un cupón?
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    id="cupon"
                    className="form-control form-control-sm"
                    placeholder="Introduce tu cupón"
                  />
                  <button className="btn btn-outline-warning btn-sm" type="button">
                    Aplicar
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="d-flex justify-content-between align-items-center border-top pt-3 mb-3">
                <h6 className="mb-0 fw-semibold">Total</h6>
                <h5 className="mb-0 fw-bold text-dark">$70.599</h5>
              </div>

              <div className="card text-center">
                <button className="btn btn-primary btn-block">Continuar Compra</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Carrito;
