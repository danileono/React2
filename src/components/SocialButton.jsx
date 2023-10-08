import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


const SocialButton = () => {
    return (
        <div>
			<div className="socialBtn-container">
            <FontAwesomeIcon icon={faFacebook} className='icon'/>
            <FontAwesomeIcon icon={faGithub} className='icon'/>
            <FontAwesomeIcon icon={faLinkedinIn} className='icon'/>
            </div>



		</div>
    )
}

export default SocialButton