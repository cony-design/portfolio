"use client";
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React, { ComponentType } from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: ComponentType) => (props: React.ComponentProps<typeof App>) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
