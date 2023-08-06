import { Accordion, AccordionItem } from "@/ui-components/accordion"
import Button from "@/ui-components/button"
import Chip from "@/ui-components/chip"
import FlexContainer from "@/ui-components/flex-container"
import { HomeIcon, PlusIcon, InfoCircledIcon } from "@radix-ui/react-icons"
import { FC } from "react"
import { MilestoneList } from "./milestone-list"
import Progress from "@/ui-components/progress"
import Rate from "@/ui-components/rate"
import { ITarget } from "@/store/target.store"

interface TargetListProps {
  list: ITarget[];
}

export const TargetList: FC<TargetListProps> = ({ list }) => {

  return (
    <Accordion>
      {list.map((item, index) =>
        <AccordionItem
          key={`accordion-${index}`}
          value={`accordion-${index}`}
          title={
            <span>{item.title}</span>
          }
          actions={[
            <FlexContainer.FlexGroup key="action" >
              <Button shape='circle' size='small'
                bordered={false} className='shadow-md !bg-primary-200'
                prefix={<HomeIcon width="1em" height="1em" />}
              />
              {{
                ["PENDING"]: <Chip type='error' >{item.statusName}</Chip>,
                ["PROCESSING"]: <Chip type='info' >{item.statusName}</Chip>
              }[item.status]}
              <Progress percent={item.percent} size="medium" className="text-info" />
              <Rate value={4} classNames={{ wrapper: "text-primary" }} />
              <InfoCircledIcon width="1em" height="1em" className="text-primary text-lg" />
            </FlexContainer.FlexGroup>
          ]}
        >
          <MilestoneList target={item} />
          <FlexContainer.FlexGroup className='mt-2'>
            <Button bordered={false} ghost
              prefix={<PlusIcon width="1em" height="1em" />}
            >Tạo cột mốc</Button>
            <Button bordered={false} ghost
              prefix={<PlusIcon width="1em" height="1em" />}
            >Tạo mục tiêu liên kết</Button>
          </FlexContainer.FlexGroup>
        </AccordionItem>
      )}
    </Accordion>
  )
}
