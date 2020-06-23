import styled from 'styled-components';
import { Card } from 'antd';


export const AntdCard = styled(Card)`
  width: 240px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: default;
  margin-bottom: 20px;
  height: 350px;
  padding: 10px 0;

  & .ant-card-cover>img {
    width: auto;
    height: 200px;
    margin: auto;
  }
`

export const AntdCardBack = styled(AntdCard)`
    & .ant-card-cover>img {
      height: 150px;
    }
    &>.ant-card-body {
      padding-bottom: 0;
    }
`

export const DetailButton = styled.button`
  background-color: #fff;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid black;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #33a;
    a {
      color: white;
    }
  }

  &>a {
    color: black;
    transition: none;
  }
`