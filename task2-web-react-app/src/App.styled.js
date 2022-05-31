import styled from 'styled-components'
import { Nav } from './components/Navbar.styled';


export const AppContainer = styled.div`
  background-color: #f3f4f6;
  height : ${`${window.innerHeight}px`}; 
`;

export const ShowMore = styled(Nav)`
  text-align: center;
  background-color: #f1f5f9;
  padding-bottom: 30px;

  .btn {
    padding: 8px 20px;
    margin-top: 0px;
    margin: auto;
    text-align: center;
    margin-bottom: 30px;
  }
`;