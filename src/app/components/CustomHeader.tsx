import Head from 'next/head';

interface CustomHeaderProps {
  title: string;
  children: React.ReactNode;
}

const CustomHeader = ({ title, children }: CustomHeaderProps) => (
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
