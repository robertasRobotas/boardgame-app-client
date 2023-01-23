import React from "react";
import styles from "./actionButton.module.css";

type ButtonType = {
  isJoined: boolean;
  onClick: () => void;
};

const ActionButton: React.FC<ButtonType> = ({ onClick, isJoined }) => {
  return (
    <button
      onClick={onClick}
      className={isJoined ? styles.joined : styles.join}
    >
      {isJoined ? "JOINED" : "JOIN"}
    </button>
  );
};

export default ActionButton;
