import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function groupPage() {
  const { query } = useRouter()
  const baseUrl: any = () => query.id && `/api/group/${query.id}`;
  const { data, error } = useSWR(
    baseUrl,
    fetcher
  );

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>{data.name}</h1>
      </section>
    </Layout>
  )
}