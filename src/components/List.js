import React from "react";
import "./List.css";

function List({ title, items, numbered = false, onItemClick }) {
  return (
    <div className="list-container">
      {title && <h3 className="list-title">{title}</h3>}
      <ul className="list-items">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-item clickable"
            onClick={() => onItemClick && onItemClick(item)}
          >
            <span className="list-item-bullet">
              {numbered ? `${index + 1}.` : "•"}
            </span>
            <span className="list-item-text">{item.text || item}</span>
            <span className="list-item-icon">ℹ️</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
