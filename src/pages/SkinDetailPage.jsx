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
                <Col md={12} className="text-center mb-4">
                    {(() => {
                        if (!skin.image) return null;
                        if (/^https?:\/\//.test(skin.image) || skin.image.startsWith('/')) {
                            return <Image src={skin.image} alt={skin.name} fluid />;
                        }
                        const cleaned = skin.image.replace(/^src\//, '');
                        try {
                            const resolved = new URL(`../${cleaned}`, import.meta.url).href;
                            return <Image src={resolved} alt={skin.name} fluid />;
                        } catch (e) {
                            return <Image src={skin.image} alt={skin.name} fluid />;
                        }
                    })()}
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <h1 className="text-center">{skin.name}</h1>
                    <p className="lead text-center">
                        Una de las skins más deseadas del mercado. Perfecta para destacar en tus partidas.
                    </p>
                    <hr />
                    <div className="text-center mb-3">
                        <h3>Precio: <span className="text-success">${skin.price.toFixed(2)}</span></h3>
                        <h5>Tipo: {skin.Type}</h5>
                        <h5>Categoria: <img src={skin.Category} alt="Categoria" style={{ width: '25px', height: '25px' }} /></h5>
                    </div>
                    <p className="text-center">
                        {skin.desc}
                    </p>
                    <div className="text-center">
                        <Button variant="primary" size="lg" className="mt-3">
                            Añadir al carrito
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SkinDetailPage;