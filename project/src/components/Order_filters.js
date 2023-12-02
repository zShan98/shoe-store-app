import React from "react";

const Order_filters = () => {
  return (
    <>
      <div className="filters">
        <div className="left_filters">
          <button>All</button>
          <button>Unfulfilled</button>
          <button>Unpaid</button>
          <button>Open</button>
          <button>Close</button>
          <button>+</button>
        </div>
      </div>
    </>
  );
};

export default Order_filters;
