import styled from 'styled-components';

export const MyMoviesContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MovieList = styled.ul`
    padding: 0;

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        min-width: 600px;
        margin-bottom: 10px;
        padding: 5px;
        border-bottom: 1px solid;
    }

    span {
        font-size: 23px;
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