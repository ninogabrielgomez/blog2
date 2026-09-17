import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I chose to specialize in Cloud and Network Engineering because I find deep satisfaction in architecting systems and configuring complex infrastructures rather than writing lines of application code. While many professionals focus on debugging software logic, my passion lies in building the secure digital highways that allow data to flow globally. This choice directly addresses the real-world problem of critical system downtime, ensuring that businesses maintain continuous operations without costly connectivity failures. I am particularly fascinated by the massive industry trend toward hybrid environments, which requires seamlessly stitching together physical corporate networks with cloud platforms like AWS or Azure. Ultimately, this specialization allows me to solve logical structural puzzles and maintain the essential infrastructure that keeps our digital world connected.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}