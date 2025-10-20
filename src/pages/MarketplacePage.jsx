import { Container, Row, Col } from 'react-bootstrap';
import SkinCard from '../components/SkinCard';
import skinsData from '../data/data.json'; // Importamos datos de prueba desde el json
import Search from '../components/Search';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function MarketplacePage() {
  return (
    <>
    <Navbar />
    <Container className="mt-4">
      <h1>Mercado de Skins</h1>
      <Search/>
      <Row>
        {skinsData.map(skin => (
          <Col key={skin.id} xs={12} md={6} lg={3}>
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
    <Footer />
    </>
  );
}

export default MarketplacePage;