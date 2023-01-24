import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Navbar from "../../components/navbar/Navbar";
import styles from "./event.module.css";
import ActionButton from "../../components/actionButton/ActionButton";
import axios from "axios";

export default function EventPage() {
  const [event, setEvent] = useState<any>();
  const [isJoined, setJoined] = useState<any>(false);

  const userId: any = "kj23i4i23u4gi23ug4324";

  const router = useRouter();

  const fetchEvent = async () => {
    const response = await axios.post(
      `http://localhost:3002/event/${router.query.id}`,
      { data: { userId: userId } }
    );

    setEvent(response.data.event);
    setJoined(response.data.isUserJoinedGame);
    console.log(response.data);
  };

  const joinEvent = async () => {
    const response = await axios.put(
      `http://localhost:3002/event/join/${router.query.id}`,
      { data: { userId: userId } }
    );

    setJoined(true);
  };

  const leaveEvent = async () => {
    const response = await axios.put(
      `http://localhost:3002/event/leave/${router.query.id}`,
      { data: { userId: userId } }
    );

    setJoined(false);
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
                isJoined={isJoined}
                onClick={() => {
                  if (!isJoined) {
                    joinEvent();
                  } else {
                    leaveEvent();
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
