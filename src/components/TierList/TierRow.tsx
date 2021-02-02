import React from "react";
import { Col, Row } from "react-bootstrap";

import styles from "../../styles/components/tierList.scss";
import { TierList } from "../../types/components/TierList";

export default function TierRow({ label }: TierList.TierRow): JSX.Element {
    return (
        <Row>
            <Col sm={4}>
                <p>{label}</p>
            </Col>
        </Row>
    );
}
