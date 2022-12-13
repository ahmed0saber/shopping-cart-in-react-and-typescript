import React from 'react'
import { Container, Nav, Navbar as NavbarBS, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from '../context/ShoppingCartContext'

export default function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBS sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button onClick={openCart}
                    style={{width: "3rem", height: "3rem", position: "relative"}}
                    variant="outline-primary"
                    className='rounded-circle'
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                <span 
                    className='rounded-circle bg-danger d-flex justify-content-center align-items-center text-white'
                    style={{width: "1.5rem", height: "1.5rem", position: "absolute", top: 0, right: 0, transform: "translate(25%, -25%)"}}
                >
                    {cartQuantity}
                </span>
                </Button>
            </Container>
        </NavbarBS>
    )
}
