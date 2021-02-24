import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div class={styles.containerProfile}>
      <img src="minion.jpg" alt="avatar" />

      <div>
        <strong>José Caldas</strong>
        <p>
          <img src="icons/level.svg" alt="" srcset="" />
          Level 1
        </p>
      </div>
    </div>
  );
}
