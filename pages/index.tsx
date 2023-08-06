import { TabLayout } from '@/components/layout/layout-tab';
export default function Home() {
  return <>
    <main className="bg-gray-100">

    </main>
  </>
}

Home.getMenu = () => {
  return (
    <TabLayout />
  )
}
