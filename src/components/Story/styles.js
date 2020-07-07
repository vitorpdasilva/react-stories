import styled from 'styled-components';

const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 15px;
  position: relative;
  align-items: center;
  &:before {
    content: '';
    position: absolute;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: ${({ gradientColors = [] }) =>
      `linear-gradient(to right, ${gradientColors[0] || 'red'}, ${
        gradientColors[1] || 'purple'
      } )`};
  }
  .avatar-wrapper {
    text-align: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid white;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    img {
      border-radius: 50%;
      width: 100%;
      height: auto;
      display: block;
      position: relative;
      min-height: 55px;
      margin-bottom: 5px;
      &:before {
        content: '';
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgb(230, 230, 230);
      }
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
