import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Cart = () => {
    const products = useSelector(state => state.cart)

    const cards = products.map(product => {
        return (
            <div className="col-md-12" style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-around' }}>
                <Card style={{ width: '18rem' }} key={product.id} className="h-100">
                    <div className="text-center">
                        <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '100px' }} />
                    </div>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            INR: {product.price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="danger">Remove item</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    })
    return (
        <div>
            {cards}
        </div>
    )
}

export default Cart;