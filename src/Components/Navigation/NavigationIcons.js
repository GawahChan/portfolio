import React from 'react';
import { NavigationIconsContainer, NavigationIcon } from './styled';

function NavigationIcons() {
    return (
        <NavigationIconsContainer>
            <NavigationIcon href="https://github.com/GawahChan" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github fa-lg" />
            </NavigationIcon>
            <NavigationIcon href="https://www.linkedin.com/in/gawahchan/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin fa-lg" />
            </NavigationIcon>
            <NavigationIcon href="mailto:gawahchan@gmail.com">
                <i class="far fa-envelope fa-lg" />
            </NavigationIcon>
        </NavigationIconsContainer>
    )
}

export default NavigationIcons;