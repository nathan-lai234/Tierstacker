import Head from "next/head";
import styles from "../styles/Home.module.css";
import TierRow from "../components/TierList/TierRow";
import Item from "../components/Item/Item";
import { Container, Row } from "react-bootstrap";
import React from "react";
import TierList from "../components/TierList/TierList";
import { TierListD } from "../types/components/TierList";

const rowLabels: string[] = ["S", "A", "B", "C"];
const itemList: TierListD.Item[] = [
    {
        name: "coin",
        imageUri:
            "http://www.goldeneaglecoin.com/resource/productimages/gold-quarter.jpg",
    },
    {
        name: "coin",
        imageUri:
            "http://www.goldeneaglecoin.com/resource/productimages/gold-quarter.jpg",
    },
];

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <TierList rows={rowLabels} items={itemList} />
                {/* <Container>
                    <Row>
                        <TierRow label="hello" />
                    </Row>
                    <Row>
                        <Item
                            name="coin"
                            imageUri="http://www.goldeneaglecoin.com/resource/productimages/gold-quarter.jpg"
                        />
                    </Row>
                </Container> */}
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    Powered by{" "}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.logo}
                    />
                </a>
            </footer>
        </div>
    );
}
