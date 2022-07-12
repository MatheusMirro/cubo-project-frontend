import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  color: white;
  width: 150px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.header`
  overflow: hidden;
  width: 100%;
  background-color: #0db8e2;
  padding: 20px 10px;
  height: 150px;
`;

export const DataUser = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-top: 60px;
`;

export const Input = styled.input`
  display: flex;
  width: 200px;
  height: 38px;
`;
