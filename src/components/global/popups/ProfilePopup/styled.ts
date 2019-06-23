import styled from 'styled-components';

export const StyledContainer = styled.div`
    position: absolute;
    width: 760px;
    height: 680px;
    left: calc(50% - 380px);
    top: calc(50% - 340px);
    background: #fff;
`

export const StyledInnerBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 220px;
    margin: auto;
    text-align: center;
    height: 100%;
    justify-content: space-around;
    padding: 60px 0;
`;