import { useRouter } from "next/router";
import Navbar from "../../components/navbar/Navbar";
import styles from "./event.module.css";
export default function EventPage() {
  const router = useRouter();
  const { id } = router.query;

  console.log("id", id);

  return (
    <div>
      <Navbar />

      <div className={styles.content}>
        <img
          className={styles.header}
          src="https://gameroom.lt/55765/terraforming-mars.jpg"
        />
      </div>
    </div>
  );
}
