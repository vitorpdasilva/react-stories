import React from 'react';
import StyledAvatar from './styles';

const Story = ({ onClick, thumbnail, username, seen, gradientColors }) => (
  <StyledAvatar onClick={onClick} seen={seen} gradientColors={gradientColors}>
    <div className='avatar-wrapper'>
      <img src={thumbnail} />
      <p>{username}</p>
    </div>
  </StyledAvatar>
);

export default Story;
