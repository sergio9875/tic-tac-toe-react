import React from 'react';
import Cross from './Cross/Cross';
import Zero from './Zero/Zero';

const Square = (props) => {
  return <div className="cell">{props.seq % 2 === 0 ? <Cross /> : <Zero />}</div>;
};

export default Square;
