import styled from 'styled-components';
import { Layout } from 'antd';


export const BackgroundDiv = styled.div`
    padding: 20px;
    color: white;
    color: ${props => props.color ? `${props.color}` : 'green' };
    ${props => props.primary && `
        background-color: black;
    `}
`

export const LayoutWrapper = styled(Layout)`
    min-height: 100vh;
`