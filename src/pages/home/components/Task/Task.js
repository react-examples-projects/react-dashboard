import React from "react";
import css from "./Task.module.scss";

export default function Task({ id, boardId, title, content, date, author }) {
  const onDragStart = (e) => {
    e.stopPropagation();
    console.log("Empezo el dragStart");
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    e.dataTransfer.setData("board_id", boardId);
    return false;
  };

  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  const onDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  return (
    <div
      className={css.task}
      id={id}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
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
