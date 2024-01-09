import React from "react";

const ListCard = ({ title, items }) => {
  return (
    <div>
      <h2 className="text-xl">{title}</h2>
      <ul className="xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-1 p-4 gap-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
