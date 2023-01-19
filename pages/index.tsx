import styles from "../styles/Home.module.css";
import Event from "../components/event/Event";
import Navbar from "../components/navbar/Navbar";
import Button from "../components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.buttonWrapper}>
        <Button onClick={() => console.log("Clicked")} text="Create Event" />
      </div>

      <div className={styles.eventWrapper}>
        <Event
          id="asdasdasd"
          imgSrc="https://gameroom.lt/55765/terraforming-mars.jpg"
          title="Tearraforming mars"
          spaesLeft={4}
          address="alaus namai"
          date="2024.02.02"
          time="10:00"
        />

        <Event
          id="klnlknlknlknl"
          imgSrc="https://gameroom.lt/55765/terraforming-mars.jpg"
          title="Tearraforming mars"
          spaesLeft={4}
          address="alaus namai"
          date="2024.02.02"
          time="10:00"
        />

        <Event
          id="xvbcxvxcvxcvxcv"
          imgSrc="https://gameroom.lt/55765/terraforming-mars.jpg"
          title="Tearraforming mars"
          spaesLeft={4}
          address="alaus namai"
          date="2024.02.02"
          time="10:00"
        />
      </div>
    </div>
  );
}
