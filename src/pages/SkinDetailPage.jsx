import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import skinsData from '../data/data.json';
import Navbar from "../components/Navbar";

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
        <>
        <Navbar />
        <Container className="mt-5">
            <Row>
                <Col md={12} className="mb-4">
                    <Image src={skin.image} alt={skin.name} fluid width='180%' />
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <h1>{skin.name}</h1>
                    <p className="lead">
                        Una de las skins más deseadas del mercado. Perfecta para destacar en tus partidas.
                    </p>
                    <hr />
                    <div className="mb-3">
                        <h3>Precio: <span className="text-success">${skin.price.toFixed(2)}</span></h3>
                        <h5>Tipo: {skin.Type}</h5>
                        <h5>Categoria: <img src={skin.Category} alt="Categoria" style={{ width: '25px', height: '25px' }} /></h5>
                    </div>
                    <p>
                        {skin.desc}
                    </p>
                    <div>
                        <Button variant="info" size="lg" className="mt-3">
                            Añadir al carrito
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default SkinDetailPage;