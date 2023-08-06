import FlexContainer from "@/ui-components/flex-container";
import { FC, PropsWithChildren, ReactNode } from "react"
import { SideBar } from "./side-bar";
import Button from "@/ui-components/button";
import { PersonIcon, BellIcon, QuestionMarkIcon, TriangleRightIcon, PlusIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarGroup } from "@/ui-components/avatar";

interface RootLayoutProps extends PropsWithChildren {
  menu?: ReactNode;
}

export const RootLayout: FC<RootLayoutProps> = ({ menu, children }) => {
  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <header className="px-2 sticky top-0 flex flex-none border-b bg-white z-50">
        <FlexContainer.FlexGroupBetween className="w-full">
          <FlexContainer.FlexGroup className="gap-4">
            <div className="w-48 py-2 text-xl font-bold">
              Simplamo
            </div>
            {menu}
          </FlexContainer.FlexGroup>
          <FlexContainer.FlexGroup className="py-1.5">
            <Button shape='circle'
              bordered={false} className='shadow-inner shadow-gray-300 !bg-gray-50 !text-gray-500'
              prefix={<PersonIcon width="1em" height="1em" />}
            />
            <Button shape='circle'
              bordered={false} className='shadow-inner shadow-gray-300 !bg-gray-50 !text-gray-500'
              prefix={<BellIcon width="1em" height="1em" />}
            />
            <Button shape='circle'
              bordered={false} className='shadow-inner shadow-gray-300 !bg-gray-50 !text-gray-500'
              prefix={<QuestionMarkIcon width="1em" height="1em" />}
            />
            <Button shape='circle' bordered={false} type="primary" solid
              prefix={<div className="rounded-full bg-white text-primary">
                <TriangleRightIcon />
              </div>}
            >
              Bắt đầu họp
            </Button>
            <Button shape='circle' bordered={false} type="primary" solid
              prefix={<PlusIcon width="1em" height="1em" />}
            />
            <Avatar name="P" />
          </FlexContainer.FlexGroup>
        </FlexContainer.FlexGroupBetween>
      </header>
      <div className="flex flex-auto min-h-0 max-w-full flex-row">
        <SideBar />
        <main className="flex-auto min-w-0 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
