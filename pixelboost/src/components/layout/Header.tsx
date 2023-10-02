import React from 'react';

const Header: React.FC = () => {
    return (
    <header>Header content
    <nav>
        <ul style={{ display: 'flex', gap: '1em', listStyle: 'none'}}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Contact</a></li>
        <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    </header>
    )
}

export default Header;