import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  return (
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeBoxNotActive}>
        <strong>Finalize um ciclo para receber um deafio </strong>
      </div>
    </div>
  );
}
