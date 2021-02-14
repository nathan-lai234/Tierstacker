import React from "react";
import { Col, Row } from "react-bootstrap";

import styles from "../../styles/components/items.module.scss";
import { TierListD } from "../../types/components/TierList";
import Item from "./Item";

export default function ItemList({ items }: TierListD.ItemList): JSX.Element {
    console.log(items);
    return (
        <Row>
            {items.map((item: TierListD.Item, index: number) => {
                return (
                    <Item
                        key={index}
                        name={item.name}
                        imageUri={item.imageUri}
                    />
                );
            })}
        </Row>
    );
}
