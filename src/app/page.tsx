import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image src={"/hero.svg"} alt="hero" width={200} height={200} />
      <h1>APSEM WEB</h1>
      {/* <Button /> */}

      <Link href={"/contacts"} className="btn-link">
        Visiter notre application
      </Link>
    </div>
  );
}
