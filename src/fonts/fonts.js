import { createGlobalStyle } from 'styled-components';

import LatoRegular from './Lato-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Lato';
        src: local('Lato'), local('Lato');
        url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
        font-weight: 400;
        font-style: normal;
    }
`;