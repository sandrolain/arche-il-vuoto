import Link from "next/link";
import emoji from "node-emoji";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <div>
          <Link href="/">
            <strong>ARCHÈ <span>IL VUOTO</span></strong>
          </Link>
        </div>
        <nav>
          <Link href="https://www.sandrolain.com">
            {emoji.emojify(":computer:")} I am a<br/>Developer
          </Link>
        </nav>
      </div>
    </header>
  );
}
