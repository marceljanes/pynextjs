import BlockchainPythonTutorial from "@/app/components/python/advancedtutorial/blockChainComponent";
import Head from "next/head";

export default function BlockchainPage() {
    return (
        <>
            <Head>
                <title>Blockchain Fundamentals with Python</title>
                <meta name="description" content="Dive into the world of blockchain technology with our comprehensive Python tutorial. Understand the basics of blockchain, how it works, and how to implement it using Python. This tutorial is ideal for both beginners and intermediate programmers who are interested in blockchain technology and want to apply their Python skills to build a simple but functional blockchain. Gain insights into concepts like block creation, chain integrity, and the decentralized nature of blockchain." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BlockchainPythonTutorial />
        </>
    );
}
