import React, { ReactElement } from 'react';

const Navbar:React.FC<{text: string}> = ({text}) : ReactElement => {
    return (
        <nav data-testid="nav">
            <h1 data-testid="nav-heading">{text}</h1>
            <a data-testid="github-link" href="https://github.com/aahmedfaraz/my-react-testing-library-corner" target="_blank" rel="noreferrer" className="github-link">GitHub Code</a>
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
