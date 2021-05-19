import styled from 'styled-components';

export const MovieListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;
`;

export const MoiveList = styled.div`
    margin: 15px;

    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        margin: 15px;
        padding: 15px;
        border-radius: 5px;
    }

    strong {
        padding-bottom: 15px;
    }

    img {
        width: 900px;
        max-height: 350px;
    }

    article a {
        text-decoration: none;
        color: #fff;
        font-size: 25px;
        background-color: brown;
        width: 100%;
        text-align: center;
        padding: 10px 0;
        border-radius: 0 0 8px 8px;
    }
`;