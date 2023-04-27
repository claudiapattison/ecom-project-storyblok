import { type FC } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import { Icon } from "@/app/components/Icon/Icon";
import Link from "next/link";

interface FooterProps {
  text: string;
  copyright: string;
  social: socialProps;
}

interface socialProps {
  facebook: string;
  twitter: string;
  instagram: string;
}

export const Footer: FC<FooterProps> = ({ text, copyright, social }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={143} height={25} />
            </Link>
          </div>
          <div className={styles.column}>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  Headphones
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  Speakers
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/">
                  Earphones
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <p className={styles.text}>{text}</p>
          </div>
          <div className={styles.column}>
            <p className={styles.text}>
              <strong>
                Copyright {currentYear}. {copyright}
              </strong>
            </p>
          </div>
          <div className={styles.column}>
            <ul className={styles["social-list"]}>
              <li>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="facebook"
                >
                  <Icon name="#facebook" className={styles.icon} />
                </a>
              </li>
              <li>
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <Icon name="#twitter" className={styles.icon} />
                </a>
              </li>
              <li>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="instagram"
                >
                  <Icon name="#instagram" className={styles.icon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
