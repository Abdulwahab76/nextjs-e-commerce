import React from "react";
import Head from 'next/head'
import "../styles/global.css";
import { AppInitialProps } from "next/app";
import '@/styles/globals.css';


interface AppPropsT {
    Component: React.FC<AppInitialProps>;
    pageProps: AppInitialProps;
}

export default function MyApp({ Component, pageProps }: AppPropsT) {
    return (
        <>
            <Head><title>Blogy</title></Head>
            <Component {...pageProps} />
        </>
    );
}
