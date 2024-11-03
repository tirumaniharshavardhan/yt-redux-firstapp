import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {

    const [products, getProducts] = useState([])
    useEffect(() => {
        //api
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProducts(result))
    }, [])

    const Cards = products.map(product => {
        return (
            <div className="col-md-3" style={{ marginBottom: '10px' , display: 'flex', justifyContent: 'space-around'}}>
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
                        <Button variant="primary">Add to cart</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    })
    return (
        <>
            <h1>Product dashboard</h1>
            <div className="row">
                {Cards}
            </div>
        </>
    )
}

export default Product;