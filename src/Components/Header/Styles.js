import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: brown;

    a {
        text-decoration: none;
        cursor: pointer;
    }
    
    .logo {
        color: #fff;
        font-size: 30px;
    }
    
    .favorite {
        background-color: #fff;
        border-radius: 5px;
        padding: 5px;
        font-weight: bold;
        color: #000;
    }
`;