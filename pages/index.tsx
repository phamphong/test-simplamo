import { ReactNode } from 'react';
import { TabLayout } from '@/components/layout/layout-tab';
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
