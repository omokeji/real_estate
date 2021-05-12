import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#000d1a' : 'cd853f') };
    white-space: nowrap;
    text-decoration: none;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({bigbtn}) => (bigbtn ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({bigbtn}) => (bigbtn ? '20px' : '14px')};


    &.hover {
        transform: translateY(-2px);
    }
`;