import { type FC } from "react";
import styles from "./CategoryMenu.module.scss";
import Image from "next/image";
import { type ImageProps, LinkProps } from "../../../../interfaces/common";
import Link from "next/link";
import { Icon } from "@/app/components/Icon/Icon";

interface CategoryMenuProps {
  list: CategoryItem[];
}

interface CategoryItem {
  id: number;
  title: string;
  image: ImageProps;
  link: string;
}

export const CategoryMenu: FC<CategoryMenuProps> = ({ list }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.id} className={styles["list-item"]}>
            <Link href="/" className={styles.link}>
              <div className={styles.content}>
                <Image
                  src={item.image.src}
                  alt={item.title}
                  width={438}
                  height={408}
                  className={styles.image}
                />
                <h2 className={styles.title}>{item.title}</h2>
                <span className={styles.label}>
                  Shop
                  <Icon name="#arrow-right" className={styles.icon} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
