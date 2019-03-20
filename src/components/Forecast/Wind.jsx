import React from 'react';

const Wind = ({ speed, direction }) => {
  return (
    <div className="card ">
      <div className="card-body">
        <h3 className="card-title">Wind</h3>
        <div className="d-flex justify-content-between">
          <div className={`msw-swa msw-ssa msw-ssa-${direction}`} />
          <h4 className="text-muted">{speed} mph</h4>
        </div>
      </div>
    </div>
  );
};

export default Wind;
