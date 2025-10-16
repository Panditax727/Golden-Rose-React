import { Container, Row, Col } from 'react-bootstrap';
import SkinCard from '../components/SkinCard';
import skinsData from '../data/data.json'; // Importamos datos de prueba desde el json

function MarketplacePage() {
  return (
    <Container className="mt-4">
      <h1>Mercado de Skins</h1>
      <Row className="mt-3" md={12}>
        {skinsData.map(skin => (
          <Col key={skin.id} xs={12} md={6} lg={4}>
            <SkinCard
              id={skin.id}
              name={skin.name}
              price={skin.price}
              image={skin.image}
              type={skin.Type}
              category={skin.Category}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MarketplacePage;