import React from "react";
import styles from "./event.module.css";
import Router from "next/router";

type EventType = {
  imgSrc: string;
  title: string;
  spaesLeft: number;
  address: string;
  date: string;
  time: string;
  id: string;
};

const Event: React.FC<EventType> = ({
  imgSrc,
  title,
  spaesLeft,
  address,
  date,
  time,
  id,
}) => {
  const onClickHandler = () => {
    Router.push(`/event/${id}`);

    console.log(id);
  };

  return (
    <div onClick={onClickHandler} className={styles.main}>
      <div className={styles.imgWrapper}>
        <img className={styles.image} alt="boardgame" src={imgSrc} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.info}>{title}</h2>
        <h4 className={styles.info}>Spaces left: {spaesLeft}</h4>
        <h5 className={styles.info}>{address}</h5>
        <h5 className={styles.info}>{date}</h5>
        <h5 className={styles.info}>{time}</h5>
      </div>
    </div>
  );
};

export default Event;
