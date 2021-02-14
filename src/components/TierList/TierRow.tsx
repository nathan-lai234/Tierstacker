import React from "react";
import { Col, Row } from "react-bootstrap";

import styles from "../../styles/components/tierList.module.scss";
import { TierListD } from "../../types/components/TierList";

export default function TierRow({ label }: TierListD.TierRow): JSX.Element {
    return (
        <Row className={styles.tierRow}>
            <Col className={styles.tierRowLabel}>
                <p>{label}</p>
            </Col>
            <Col className={styles.tierRowItemList}></Col>
        </Row>
    );
}
