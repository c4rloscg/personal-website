import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default class MyDocument extends Document {
    public static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    public render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
