import React, { useState } from "react";
import styles from "./eventForm.module.css";
import Input from "../input/Input";
import Button from "../button/Button";
import axios from "axios";

const EventForm: React.FC = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [address, setAddress] = useState();
  const [author, setAuthor] = useState();
  const [boardgameImage, setBoardgameImage] = useState();
  const [boardgameName, setBoardgameName] = useState();
  const [requiredPlayers, setRequiredPlayers] = useState();

  const onClickHandler = () => {
    console.log(title, date, time, author, boardgameName, requiredPlayers);

    const eventData = {
      title: title,
      date: date,
      time: time,
      address: address,
      author: author,
      boardgameImage: boardgameImage,
      boardgameName: boardgameName,
      requiredPlayers: requiredPlayers,
    };

    const response = axios.post("http://localhost:3002/event", eventData);
    console.log("response", response);
  };

  return (
    <div className={styles.main}>
      <Input onChange={setTitle} value={title} placeholder="Title" />
      <Input onChange={setDate} value={date} placeholder="Data" />
      <Input onChange={setTime} value={time} placeholder="Time" />
      <Input onChange={setAddress} value={address} placeholder="Address" />
      <Input onChange={setAuthor} value={author} placeholder="Author" />
      <Input
        onChange={setBoardgameName}
        value={boardgameName}
        placeholder="Boardgame name"
      />
      <Input
        onChange={setBoardgameImage}
        value={boardgameImage}
        placeholder="Image URL"
      />
      <Input
        onChange={setRequiredPlayers}
        value={requiredPlayers}
        placeholder="Required number of players"
      />
      <div className={styles.buttonWrapper}>
        <Button onClick={onClickHandler} text="Create" />
      </div>
    </div>
  );
};

export default EventForm;
