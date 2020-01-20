import React from 'react';

function SocialIcons() {
    return (
        <div className='socialIcon'>
            <ul>
                <li>
                    <a rel={'external'} href="https://www.facebook.com/profile.php?id=100001611663496" target='_blank'>
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a rel={'external'} href="https://twitter.com/Ashukumarsharma" target='_blank'>    
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a rel={'external'} href="https://github.com/A-k-sharma" target='_blank'>
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a  rel={'external'} href="https://www.linkedin.com/in/a-k-sharma" target='_blank'>
                        <i class="fab fa-linkedin-in"></i>
                    </a>    
                </li>
            </ul>
        </div>
    )
}

export default SocialIcons;
