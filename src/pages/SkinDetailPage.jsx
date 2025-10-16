// src/pages/SkinDetailPage.jsx

import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import skinsData from '../data/data.json';

function SkinDetailPage() {
    const { id } = useParams();
    const skin = skinsData.find(s => s.id === id);

    if (!skin) {
        return (
            <Container className="text-center mt-5">
                <h2>Skin no encontrada</h2>
                <p>Lo sentimos, no pudimos encontrar la skin que buscas.</p>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={9}>
                    <img src={skin.image} alt={skin.name} width="160%" />
                </Col>

                <Col md={3}>
                    <h1>{skin.name}</h1>
                    <p className="lead">
                        Una de las skins más deseadas del mercado. Perfecta para destacar en tus partidas.
                    </p>
                    <hr />
                    <h3>Precio: <span className="text-success">${skin.price.toFixed(2)}</span></h3>
                    <h5>Tipo: {skin.Type}</h5>
                    <h5>Categoria: <img src={skin.Category} alt="Categoria" style={{ width: '25px', height: '25px' }} /></h5>
                    <p>
                        {skin.desc}
                    </p>
                    <Button variant="primary" size="lg" className="mt-3">
                        Añadir al carrito
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default SkinDetailPage;