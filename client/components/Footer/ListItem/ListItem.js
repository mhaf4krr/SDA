import React from "react";

import styles from "./ListItem.module.css";

import Link from "next/link";

export default function ListItem(props) {
  return (
    <div className={styles["main_wrapper"]}>
      <h5>{props["title"]}</h5>
      <ul>
        {props["data"].map((link) => {
          return (
            <li>
              <a href={link["link"]}>{link["title"]}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
