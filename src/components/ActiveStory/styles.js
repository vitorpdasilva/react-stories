import styled, { keyframes } from 'styled-components';

const increaseWidth = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const StyledActiveStory = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background: ${({ theme }) =>
    theme === 'light' ? 'rgba(255, 255, 255, 0.92)' : 'rgba(0, 0, 0, 0.92)'};
  .container {
    position: absolute;
    left: calc(50% - 225px);
    top: calc(50% - 42vh);
    width: 450px;
    height: 85vh;
    overflow: hidden;
  }
  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    display: flex;
    flex-wrap: nowrap;
    .progress-item {
      height: 100%;
      flex-grow: 1;
      background: rgba(255, 255, 255, 0.4);
      margin: 0 2px;
      position: relative;
      &.focus {
        &:before {
          content: '';
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 1);
          position: absolute;
          animation: ${increaseWidth} 15s linear;
        }
      }
      &.seen {
        background: rgba(255, 255, 255, 1);
      }
    }
  }
  .close {
    background: none;
    border: 0;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    &:focus {
      outline: none;
    }
  }
`;

export default StyledActiveStory;
