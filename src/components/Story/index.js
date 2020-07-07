import React from 'react';
import StyledAvatar from './styles';

const Story = ({ thumbnail, username, seen }) => (
  <StyledAvatar seen={seen}>
    <div className='avatar-wrapper'>
      <img src={thumbnail} />
      <p>{username}</p>
    </div>
  </StyledAvatar>
);

export default Story;
