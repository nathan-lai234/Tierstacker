import React from "react";

import styles from "../../styles/components/tierList.module.scss";
import { TierListD } from "../../types/components/TierList";

export default function Item({ name, imageUri }: TierListD.Item): JSX.Element {
    return <img src={imageUri} alt={name} className={styles.item} />;
}
