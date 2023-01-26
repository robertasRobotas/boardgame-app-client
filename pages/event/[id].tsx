import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Navbar from "../../components/navbar/Navbar";
import styles from "./event.module.css";
import ActionButton from "../../components/actionButton/ActionButton";
import axios from "axios";

export default function EventPage({ event: eventData, isUserJoinedGame }: any) {
  const [event, setEvent] = useState<any>(eventData);
  const [isJoined, setJoined] = useState<any>(isUserJoinedGame);

  const userId: any = "kj23i4i23u4gi23ug4324";

  const router = useRouter();

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

export async function getServerSideProps(ctx: any) {
  console.log(ctx.req.cookies.jwt);

  const { data } = await axios.post(
    `http://localhost:3002/event/${ctx.query.id}`,
    {
      data: { userId: "kj23i4i23u4gi23ug4324" },
      headers: { jwt: ctx.req.cookies.jwt },
    }
  );

  return {
    props: {
      event: data.event,
      isUserJoinedGame: data.isUserJoinedGame,
    },
  };
}
