import styles from "./UserGreeting.module.css";
import * as React from "react";

interface greetingProps {
  username?: string;
  isLoggedIn?: boolean;
}

function UserGreeting(props: greetingProps): React.ReactNode {
  const checkName = props.username ? props.username : "Guest"
  
  const welcomeMessage = (
    <h2 className={styles.welcome_message}>Welcome {checkName}</h2>
  );
  const loginPrompt = (
    <h2 className={styles.login_prompt}>Please Login To Continue</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

export default UserGreeting;
