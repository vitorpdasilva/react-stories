import styled from 'styled-components';

const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 15px;
  .avatar-wrapper {
    text-align: center;
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
    p {
      font-size: 12px;
      padding: 0;
      margin: 0;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export default StyledAvatar;
