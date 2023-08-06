import { ReactNode } from 'react';
import { TabLayout } from '@/components/layout/layout-tab';
import { GetStaticPaths, GetStaticProps } from 'next';
export default function Home() {
  return <>
    <main className="bg-gray-100">

    </main>
  </>
}

Home.getLayout = (page: ReactNode) => {
  return (
    <TabLayout value="target" >
      {page}
    </TabLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/target"],
    fallback: true, // false or "blocking"
  }
}

export const getStaticProps: GetStaticProps = () => {

  return {
    props: {},
    redirect: {
      destination: "/target",
      permanent: true,
    }
  }
}
