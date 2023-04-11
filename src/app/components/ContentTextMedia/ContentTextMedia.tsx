import { type FC } from "react";
import styles from "./ContentTextMedia.module.scss";
import Image from "next/image";
import { type ImageProps } from "../../../../interfaces/common";

interface ContentTextMediaProps {
  title: string;
  text: string;
  image: ImageProps;
}

export const ContentTextMedia: FC<ContentTextMediaProps> = ({
  title,
  text,
  image,
}) => {
  console.log(image);
  return (
    <div className={`wrapper ${styles.container}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles["image-container"]}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
