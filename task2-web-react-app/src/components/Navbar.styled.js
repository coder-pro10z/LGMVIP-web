import styled from "styled-components";

export const Nav = styled.div`
  padding: 1rem 3rem;
  font-size: 20px;
  background-color: white;

  .logo {
    font-weight: 700;
    font-family: 'Festive', cursive;
    font-size: 40px;
    color: #0d9488;
    text-shadow: 2px 2px 2px #e5e7eb;
  }

  .btn {
    border: 1px solid #0d9488;
    color: #0d9488;
    background-color: white;
    border-radius: 20px;
    font-size: 18px;
    height: fit-content;
    cursor: pointer;
    &:hover {
      background-color: #0d9488;
      color: white;
    }
  }
  .get-user-btn {
    vertical-align: middle;
    padding: 5px 12px;
    margin-top: 10px;
  }
`;