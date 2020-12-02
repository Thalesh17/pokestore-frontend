import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;
export const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
`;
export const Button = styled.button`
    cursor: pointer;
    border: none;
    color: white; 
    padding: 14px 28px; 
    border-radius: 8px;
    opacity: 1;
    transition: 0.3s;
    :hover {
        opacity: 0.8;
    }
`;
export const Content = styled.div`
    margin-top: 5rem;
`;

