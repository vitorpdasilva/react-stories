import styled from 'styled-components';

const StyledAvatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: ${({ seen }) => `2px solid ${seen ? 'grey' : 'green'}`};
  position: relative;
  padding: 2px;
  box-sizing: border-box;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export default StyledAvatar;
