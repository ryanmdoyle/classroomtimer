import styled from 'styled-components';

const SettingContainerStyled = styled.div`
  margin: 1rem 0 0 0;
  padding: 0 1rem;
  border: 1rem solid rgb(0,0,0,0);
  border-radius: 0.5rem;
  :hover {
    background-color: rgb(255, 255, 255, 0.05);
  }
  label {
    line-height: 2rem;
  }
  input {
    position: relative;
    float: right;
  }
  transition: background-color 0.5s;
`;

export default SettingContainerStyled;
