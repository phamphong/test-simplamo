import { ITarget } from "@/store/target.store"
import { Avatar } from "@/ui-components/avatar"
import Chip from "@/ui-components/chip"
import FlexContainer from "@/ui-components/flex-container"
import Progress from "@/ui-components/progress"
import { Timeline, TimelineItem } from "@/ui-components/timelines"
import { ArrowUpIcon, ClockIcon, HomeIcon, PlusIcon } from "@radix-ui/react-icons"
import { FC } from "react"

interface MilestoneListProps {
  target: ITarget;
}

export const MilestoneList: FC<MilestoneListProps> = ({ target }) => {
  return (
    <Timeline
      head={
        <FlexContainer.FlexGroupBetween className="text-error">
          <FlexContainer.FlexGroup>
            <FlexContainer.FlexGroup>
              <span className="flex ring-2 ring-gray-300 bg-gray-100 p-0.5 rounded-full h-fit">
                <Progress
                  percent={target.percent} showPercent={false}
                  size="small" className="text-error"
                />
              </span>
              <div className="text-error">
                <h4 className='font-semibold'>
                  Thực hiện campaign
                </h4>
                <FlexContainer.FlexGroup>
                  <ClockIcon width="1em" height="1em" />
                  Trễ hạn 5 ngày cho {target.milestones.at(0)?.title}
                </FlexContainer.FlexGroup>
              </div>
            </FlexContainer.FlexGroup>
          </FlexContainer.FlexGroup>
          <FlexContainer.FlexGroup>
            <span className="flex items-center text-xs">
              <ArrowUpIcon /> {target.percent}%
            </span>
            <Progress type="line" percent={target.percent} />
            <Chip type='error'
              className='bg-primary-400 ring-primary-400 font-semibold'
            >
              {target.percent}%
            </Chip>
          </FlexContainer.FlexGroup>
        </FlexContainer.FlexGroupBetween>
      }
    >
      {target.milestones.map((item, index2) =>
        <TimelineItem
          key={`timeline-${index2}`}
        >
          <FlexContainer.FlexGroupBetween>
            <FlexContainer.FlexGroup>
              <Avatar src={item.user.avatar} name={item.user.name} />
              {item.title}
            </FlexContainer.FlexGroup>
            <FlexContainer.FlexGroup>
              <Chip type='info' >Cá nhân</Chip>
              {{
                ["PENDING"]: <Chip type='error' >{item.statusName}</Chip>,
                ["PROCESSING"]: <Chip type='info' >{item.statusName}</Chip>
              }[item.status]}
              <Progress percent={item.percent} size="medium" className="text-error" />
            </FlexContainer.FlexGroup>
          </FlexContainer.FlexGroupBetween>
        </TimelineItem>
      )}
    </Timeline>
  )
}
