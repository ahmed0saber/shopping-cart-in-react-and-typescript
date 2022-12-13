import React from 'react'
import { Card, Button } from "react-bootstrap"
import { formatCurrency } from '../utilities/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    img: string
}

export default function StoreItem({id, name, price, img}: StoreItemProps) {
    const { 
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart 
    } = useShoppingCart()
    const quantity: number = getItemQuantity(id)
    return (
        <Card className='h-100'>
            <Card.Img variant='top' src={img} height="200px" style={{ objectFit: "cover" }}/>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <Button onClick={() => increaseCartQuantity(id)} className='w-100'>Add To Cart</Button>
                    ) : (<div 
                        className='d-flex align-items-center flex-column'
                        style={{ gap: "0.5rem" }}
                    >
                        <div 
                            className='d-flex justify-content-center align-items-center'
                            style={{ gap: "0.5rem" }}
                        >
                            <Button onClick={() => decreaseCartQuantity(id)} style={{ padding: "0.375rem" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                            </svg>
                            </Button>
                            <div>
                                <span className='fs-3'>{quantity}</span> in cart
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)} style={{ padding: "0.375rem" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                            </svg>
                            </Button>
                        </div>
                        <Button onClick={() => removeFromCart(id)} variant="danger" 
                            className='d-flex justify-content-center align-items-center' 
                            style={{ gap: "6px" }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
                            <path fillRule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zm5.22 1.72a.75.75 0 011.06 0L10 10.94l1.72-1.72a.75.75 0 111.06 1.06L11.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 01-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                            Remove From Cart</Button>
                    </div>)}
                </div>
            </Card.Body>
        </Card>
    )
}
