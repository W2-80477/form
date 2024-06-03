import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcom to The CfC Software India Private Ltd. </h1>
      <button><Link href='/register'>Go to the registration page</Link> </button>
     
    </main>
  );
}
