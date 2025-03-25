import styles from "./Button.module.css";

function Button() {

    // inline styling

//    const styles = {
//             backgroundColor: "hsl(308, 89.00%, 64.30%)",
//             color:" white",
//             padding: "10px 20px",
//             borderRadius:" 5px",
//             border: "none",
//             cursor: "pointer",
//     }


  return (
    <button className={styles.button} title="button">
      Click Me
    </button>
  );
}

export default Button;
