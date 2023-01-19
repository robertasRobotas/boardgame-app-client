import React, { useState } from "react";
import styles from "./eventForm.module.css";
import Input from "../input/Input";
import Button from "../button/Button";

const EventForm: React.FC = () => {
  const [title, setTitle] = useState();
  const [data, setData] = useState();
  const [time, setTime] = useState();
  const [author, setAuthor] = useState();
  const [boardgameName, setBoardgameName] = useState();
  const [requiredPlayers, setRequiredPlayers] = useState();

  const displayFormValues = () => {
    console.log(title, data, time, author, boardgameName, requiredPlayers);
  };

  return (
    <div className={styles.main}>
      <Input onChange={setTitle} value={title} placeholder="Title" />
      <Input onChange={setData} value={data} placeholder="Data" />
      <Input onChange={setTime} value={time} placeholder="Time" />
      <Input onChange={setAuthor} value={author} placeholder="Author" />
      <Input
        onChange={setBoardgameName}
        value={boardgameName}
        placeholder="Boardgame name"
      />
      <Input
        onChange={setRequiredPlayers}
        value={requiredPlayers}
        placeholder="Required number of players"
      />
      <div className={styles.buttonWrapper}>
        <Button onClick={displayFormValues} text="Create" />
      </div>
    </div>
  );
};

export default EventForm;
