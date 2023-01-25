import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Event from "../components/event/Event";
import Navbar from "../components/navbar/Navbar";
import Button from "../components/button/Button";
import Router from "next/router";

export default function Home(props: any) {
  const [events, setEvents] = useState<any>(props.events);

  const [filter, setFilter] = useState<any>("");

  const onChangeFilterInputHander = (eventValue: any) => {
    setFilter(eventValue);
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.buttonWrapper}>
        <Button
          onClick={() => Router.push("/createEvent")}
          text="Create Event"
        />
      </div>

      <div className={styles.inputWrapper}>
        <input
          value={filter}
          onChange={(event) => onChangeFilterInputHander(event.target.value)}
        />
      </div>

      <div className={styles.eventWrapper}>
        {events
          .filter((event: any) => event.boardgameName.includes(filter))
          .map((event: any) => {
            return (
              <Event
                id={event._id}
                imgSrc={event.boardgameImage}
                title={event.boardgameName}
                spaesLeft={event.requiredPlayers}
                address={event.address}
                date={event.date}
                time={event.time}
              />
            );
          })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3002/events");

  return {
    props: {
      events: response.data.event,
    },
  };
}
