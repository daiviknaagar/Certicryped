import React from 'react'
import OwnerPortal from './OwnerPortal';
import OwnerAuth from './OwnerAuth';
import OwnerAuthUpdated from './OwnerAuthUpdated';

const Owner = ({approve, revoke}) => {
  const OwnerUser = localStorage.getItem('OwnerProfile');
  console.log("displaying Owner User");
  console.log(OwnerUser);
  return (
    <div>
      {(OwnerUser) ? (<OwnerPortal/>) : (<OwnerAuthUpdated/>)}
    </div>
  )
}

export default Owner;
