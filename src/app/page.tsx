import { getArticles } from '@/lib/newt'
import styles from '@/app/page.module.css'
import CustomHeader from '@/app/components/CustomHeader'
import HomeClient from '@/app/components/HomeClient'

export const metadata = {
  title: 'Newt・Next.jsブログ',
  description: 'NewtとNext.jsを利用したブログですよ',
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <main className={styles.main}>
      <CustomHeader title="TAKEO KOTANI">
        <p>This is Kotani&apos;s Portfolio Site</p>
      </CustomHeader>
      <HomeClient articles={articles} />
    </main>
  )
}
