import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Navbar from "../../components/navbar/Navbar";
import styles from "./event.module.css";
import ActionButton from "../../components/actionButton/ActionButton";
import axios from "axios";

export default function EventPage() {
  const [event, setEvent] = useState<any>();

  const router = useRouter();

  const fetchEvent = async () => {
    const response = await axios.get(
      `http://localhost:3002/event/${router.query.id}`
    );

    setEvent(response.data.event);
    console.log(response.data.event);
  };

  useEffect(() => {
    if (router.query.id) {
      fetchEvent();
    }
  }, [router.query]);

  return (
    <div>
      <Navbar />

      {event && (
        <div className={styles.main}>
          <img className={styles.header} src={event.boardgameImage} />

          <div className={styles.content}>
            <div className={styles.details}>
              <h1>{event.boardgameName}</h1>
              <h4>Spaces left: {event.requiredPlayers}</h4>
              <h6>Location: {event.address}</h6>
              <h6>Event date: {event.date}</h6>
              <h6>Time: {event.time}</h6>
            </div>
            <div className={styles.actions}>
              <ActionButton
                isJoined={true}
                onClick={() => console.log("clicked")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
