import styles from "./Student.module.css";

interface StudentProps {
  name?: string;
  age?: number;
  isStudent?: boolean;
}

function Student(props: StudentProps) {
  return (
    <div className={styles.student}>
      <h1>Student Info</h1>
      <p>Name: {props.name ? props.name : "Guest"}</p>
      <p>Age: {props.age ? props.age : 0}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;
