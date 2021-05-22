import React from "react";
import css from "./Task.module.scss";

export default function Task({ id, title, content, date, author }) {
  const onDragStart = (e) => {
    console.log("Empezo el dragStart")
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };

  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      className={css.task}
      id={id}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      draggable
    >
      <h6>{title}</h6>
      <p>{content}</p>
      <time dateTime={date} className="text-muted" style={{ fontSize: "10px" }}>
        {date}
      </time>
    </div>
  );
}
