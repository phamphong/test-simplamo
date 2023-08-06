import FlexContainer from "@/ui-components/flex-container";
import { TabMenuItem, TabMenus } from "@/ui-components/tab-menus"
import Link from "next/link";
import { FC, PropsWithChildren } from "react"

interface TabLayoutProps extends PropsWithChildren {
  value?: string;
}

export const TabLayout: FC<TabLayoutProps> = ({ value }) => {
  return (
    <>
      <FlexContainer.FlexGroupBetween>
        <TabMenus value={value} >
          <TabMenuItem value="target" >
            <Link href="/target" >
              Mục tiêu
            </Link>
          </TabMenuItem>
          <TabMenuItem value="indicator" >
            <Link href="/indicator" >
              Chỉ số
            </Link>
          </TabMenuItem>
        </TabMenus>
      </FlexContainer.FlexGroupBetween>
    </>
  )
}
