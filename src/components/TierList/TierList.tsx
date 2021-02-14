import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "../../styles/components/tierList.module.scss";
import { TierListD } from "../../types/components/TierList";
import ItemList from "../Item/ItemList";
import TierRow from "./TierRow";

export default function TierList({
    rows,
    items,
}: TierListD.TierList): JSX.Element {
    return (
        <DndProvider backend={HTML5Backend}>
            <Container>
                {rows.map((label: string, index: number) => {
                    return <TierRow key={index} label={label}></TierRow>;
                })}
                <ItemList items={items} />
            </Container>
        </DndProvider>
    );
}
