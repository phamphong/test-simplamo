import { SingleCollapse } from "@/ui-components/accordion";
import Badge from "@/ui-components/badge";
import Button from "@/ui-components/button";
import FlexContainer from "@/ui-components/flex-container";
import Input from "@/ui-components/input";
import Progress from "@/ui-components/progress";
import {
  MagnifyingGlassIcon, DashboardIcon,
  LightningBoltIcon, ListBulletIcon,
  CaretDownIcon, AvatarIcon,
  CodeIcon, BarChartIcon,
  BackpackIcon, TransformIcon,
  MarginIcon, PersonIcon,
  PaperPlaneIcon, PlusIcon,
  GearIcon
} from "@radix-ui/react-icons";
import { FC, PropsWithChildren } from "react"

const groupList = [
  { title: "01. Leadership Team", unread: 1, icon: AvatarIcon },
  { title: "03. Operation Team", unread: 0, icon: CodeIcon },
  { title: "02. Core Team", unread: 0, icon: BarChartIcon },
  { title: "05. Markerting", unread: 0, icon: BackpackIcon },
  { title: "05. Product Team", unread: 1, icon: TransformIcon },
  { title: "06. Sales", unread: 1, icon: MarginIcon },
  { title: "08. HR", unread: 0, icon: PersonIcon },
  { title: "07. Onboarding", unread: 1, icon: PaperPlaneIcon },
]

const privateGroupList = [
  { title: "Cask & Simplano", unread: 0, icon: AvatarIcon },
  { title: "Review HĐLĐ Anh Trí", unread: 0, icon: CodeIcon },
]

interface SideBarProps extends PropsWithChildren {
}

export const SideBar: FC<SideBarProps> = ({ children }) => {
  return (
    <aside className="flex flex-none flex-col w-48 border-r overflow-auto min-w-0">
      <FlexContainer.FlexGroup className="p-2 border-b flex-col !items-start">
        <Input placeholder='Tìm kiếm ...'
          prefix={<MagnifyingGlassIcon width="1em" height="1em" />}
          suffix={<div className="text-sm flex gap-1 items-center"><DashboardIcon />K</div>}
        />
        <FlexContainer.FlexRow
          prefix={<LightningBoltIcon className="text-gray-500" />}
          suffix={<Progress percent={50} className="text-primary" />}
        >
          Bắt đầu
        </FlexContainer.FlexRow>
        <FlexContainer.FlexRow
          prefix={<DashboardIcon className="text-gray-500" />}
        >
          Bảng điều khiển
        </FlexContainer.FlexRow>
        <FlexContainer.FlexRow
          prefix={<ListBulletIcon className="text-gray-500" />}
        >
          Dòng thời gian
        </FlexContainer.FlexRow>
        <FlexContainer.FlexRow
          prefix={<CaretDownIcon className="text-gray-500" />}
          className="text-xs"
        >
          Xem tất cả
        </FlexContainer.FlexRow>
      </FlexContainer.FlexGroup>
      <FlexContainer.FlexGroup className="p-2 border-b flex-col !items-start">
        <SingleCollapse title={
          <FlexContainer.FlexRow
            className="text-xs w-full"
          >
            Nhóm chính thức ({groupList.length})
          </FlexContainer.FlexRow>
        }
          actions={[
            <MagnifyingGlassIcon width="1em" height="1em" key="search" />
          ]}
        >
          <FlexContainer.FlexGroup className="flex-col !items-start">
            {groupList.map((group, index) =>
              <FlexContainer.FlexRow key={`group-${index}`} nowrap
                prefix={<Button shape="round" solid size="small" className="!p-0.5"
                  prefix={group.icon ? <group.icon width={12} height={12} /> : ""}
                />}
                suffix={!!group.unread && <Badge>{group.unread}</Badge>}
              >
                <div className="font-semibold text-xs text-ellipsis overflow-hidden whitespace-nowrap">
                  {group.title}
                </div>
              </FlexContainer.FlexRow>
            )}
            <Button ghost bordered={false} size="small"
              prefix={<PlusIcon />}
            >
              Tạo nhóm
            </Button>
          </FlexContainer.FlexGroup>
        </SingleCollapse>
      </FlexContainer.FlexGroup>
      <FlexContainer.FlexGroup className="p-2 border-b flex-col !items-start">
        <SingleCollapse title={
          <FlexContainer.FlexRow
            className="text-xs w-full"
          >
            Nhóm riêng tư ({privateGroupList.length})
          </FlexContainer.FlexRow>
        }
          actions={[
            <MagnifyingGlassIcon width="1em" height="1em" key="search" />
          ]}
        >
          <FlexContainer.FlexGroup className="flex-col !items-start">
            {privateGroupList.map((group, index) =>
              <FlexContainer.FlexRow key={`group-${index}`} nowrap
                prefix={<Button shape="round" solid size="small" className="!p-0.5"
                  prefix={group.icon ? <group.icon width={12} height={12} /> : ""}
                />}
                suffix={!!group.unread && <Badge>{group.unread}</Badge>}
              >
                <div className="font-semibold text-xs text-ellipsis overflow-hidden whitespace-nowrap">
                  {group.title}
                </div>
              </FlexContainer.FlexRow>
            )}
            <Button ghost bordered={false} size="small"
              prefix={<PlusIcon />}
            >
              Tạo nhóm
            </Button>
          </FlexContainer.FlexGroup>
        </SingleCollapse>
      </FlexContainer.FlexGroup>
      <div className="mt-auto p-2 border-t">
        <FlexContainer.FlexRow
          prefix={<GearIcon />}
        >
          Cài đặt
        </FlexContainer.FlexRow>
      </div>
    </aside>
  )
}
