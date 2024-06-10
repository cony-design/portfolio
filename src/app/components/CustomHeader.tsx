import Head from 'next/head';

const CustomHeader = ({ title, children }) => (
  <>
    <Head>
      <title>TAKEO KOTANI</title>
      <meta name="description" content="NewtとNext.jsを利用したTAKEO KOTANIのサイトです" />
    </Head>
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  </>
);

export default CustomHeader;
