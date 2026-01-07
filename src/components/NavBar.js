import React from 'react'

const NavBar = ({cartCount}) => {
  return (
    <div>
      <h3>Cart Items: {cartCount}</h3>
    </div>
  );
}

export default NavBar;