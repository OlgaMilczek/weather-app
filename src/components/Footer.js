import React from 'react'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className='footer'>
            <div className='inner'>
                Copyright &copy; Olga Milczek 
                <a href='https://github.com/OlgaNowakowska' target="_blank">
                    <FontAwesomeIcon icon={faGithub } className='github-logo'/>
                </a>
            </div>
        </div>
    );
}

export default Footer;