import React from "react";
import css from "./Board.module.scss";
function Task({ id, title, content, date, author, ...props }, ref) {
  return (
    <div className={css.task} data-task-id={id} {...props} ref={ref}>
      <h6>{title}</h6>
      <p>{content}</p>
      <time dateTime={date} className="text-muted" style={{ fontSize: "10px" }}>
        {date}
      </time>
    </div>
  );
}

export default React.forwardRef(Task);
