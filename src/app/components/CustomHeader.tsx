import Head from 'next/head';
import styles from './CustomHeader.module.scss';

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
    <section className={styles.CustomHeader}>
      <h1 className={styles.Title}>{title}</h1>
      <p className={styles.Desc}>{children}</p>
    </section>
  </>
);

export default CustomHeader;
