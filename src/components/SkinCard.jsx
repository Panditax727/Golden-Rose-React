import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Funcion de prueba no testeada, utiliza parametros para mostrar distintas skins, es reutilizable
function SkinCard({ id, name, image, price, type, category }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Precio: ${price} <br />
          Tipo: {type} <br />
          Categoria: <img src={category} alt="Categoria" style={{ width: '20px', height: '20px' }} />
        </Card.Text>
        <Button as={Link} to={`/skin/${id}`} variant="primary">Ver Detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default SkinCard;