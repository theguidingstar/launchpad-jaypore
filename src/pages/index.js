import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaypore Labs</title>
        <meta
          name="description"
          content="We are a new age internet service-based company that is fuelled by the energy and talent of young professionals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home">
        <div className="main">
          <Image src={"/logo.png"} width={250} height={250} />
          <div style={{ color: "#2f2f4a", marginTop: '20px', fontSize: '20px' }}>
            Unveling Curtain soon. <br/> Contact us :{" "}
            <a style={{
              textDecoration: 'underline',
              color: '#2f2f4a'
            }} href="mailto:contact@jayporelabs.com">contact@jayporelabs.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
