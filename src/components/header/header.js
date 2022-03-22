import React from 'react'
import { Container } from 'react-bootstrap'
import background from './Rectangle 2.svg'
import background2 from './Rectangle 3.svg'

function App() {
    return (
        <header Style="position:relative;">
            <img Style="min-height:240px;object-fit:cover;" className="w-100" src={background} alt="Background IMG"/>
            <div Style="position: absolute; top:0">
                <img Style="min-height:240px;object-fit:cover;" className="w-100" src={background2} alt="Backgrond IMG2"/>
                <Container className="con" Style="position: absolute; bottom:14%; left:12%; color:white">
                    <h1>Computer Engineering</h1>
                    <p>142,765 Computer Engineers follow this</p>
                </Container>
            </div>
        </header>
    )
}

export default App;
