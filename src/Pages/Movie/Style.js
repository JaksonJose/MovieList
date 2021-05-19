import styled from 'styled-components';

export const MovieInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;

    img {
        border-radius: 20px;
    }
    
    button {
        margin: 15px 5px 0 0;
        border: 0;
        border-radius: 20px;
        font-size: 20px;
        outline: none;
        padding: 12px;
        cursor: pointer;
        transition: all 0.5s;
    }
    
    button:hover {
        background-color: brown;
        color: #fff;
    }
    
    a {
        text-decoration: none;
        color: #000;
        transition: all 0.5s;
    }
    
    a:hover {
        color: #fff;
    }
`;