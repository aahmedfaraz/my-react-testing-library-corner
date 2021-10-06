import React, { ReactElement } from 'react';

const Navbar:React.FC<{text: string}> = ({text}) : ReactElement => {
    return (
        <nav data-testid="nav">
            <h1 data-testid="nav-heading">{text}</h1>
            <ul>
                <a data-testid="nav-link" href="#!"><li>Home</li></a>
                <a data-testid="nav-link" href="#!"><li>Services</li></a>
                <a data-testid="nav-link" href="#!"><li>Projects</li></a>
                <a data-testid="nav-link" href="#!"><li>Contact</li></a>
            </ul>
        </nav>
    )
}

export default Navbar;
