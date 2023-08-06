import { IIndicator } from "@/store/indicator.store";
import { Avatar } from "@/ui-components/avatar";
import FlexContainer from "@/ui-components/flex-container";
import { Column, Table } from "@/ui-components/table";
import { Tooltip } from "@/ui-components/tooltip";
import { shortNumber } from "@/utils/number.util";
import { ArrowTopRightIcon, GearIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import moment from "moment";
import { FC } from "react";

interface IndicatorTableProps {
  data: IIndicator[],
}

export const IndicatorTable: FC<IndicatorTableProps> = ({ data }) => {
  let now = moment()

  return (
    <Table<IIndicator>
      data={data.map((e, i) => ({ ...e, key: i.toString() }))}
    >
      <Column<IIndicator> dataIndex="title" fixed="left" width={340}
        title={
          <FlexContainer.FlexRow
            className="text-gray-500 py-2"
            prefix={<div className='w-8 h-8 flex items-center justify-center'>Acc</div>}
            suffix={<div>Mục tiêu</div>}
          >
            Tiêu đề
          </FlexContainer.FlexRow>
        }
        render={(value, record) =>
          <FlexContainer.FlexRow nowrap
            className="py-2 text-xs font-semibold"
            prefix={<Avatar src={record.user.avatar} name={record.user.name} key={value} />}
            suffix={<div className="text-right">
              <div className="text-gray-400">≥</div>
              <div>
                {shortNumber(record.target)}
              </div>
            </div>}
          >
            {value}
          </FlexContainer.FlexRow>
        }
      />
      {data.at(0)?.times.map((d, i) => {
        let m = moment(d.date);
        let isThisWeek = m.isSame(now, 'W');
        return <Column<IIndicator> width={80} key={i} dataIndex="times"
          title={<div className={clsx(
            'text-center text-gray-500 py-2',
            isThisWeek && 'bg-primary-100 text-primary'
          )}>
            <div>
              Tuần {m.format("W")}
            </div>
            <div>
              {m.format("YYYY")}
            </div>
          </div>
          }
          render={(value, record) =>
            <Tooltip title={<div>
              <p className='mb-1'>
                Mục tiêu tuần (Tuần {m.format("W/YYYY")}): ≥ {shortNumber(record.times[i].target)}
              </p>
              <p>Giá trị đạt được: {shortNumber(record.times[i].amount)}</p>
            </div>} >
              <div className={clsx(
                'text-center rounded h-6 leading-6 font-semibold',
                isThisWeek ? "bg-white border border-gray-300" : "bg-primary-300 text-error"
              )}>
                {isThisWeek ? "" : shortNumber(record.times[i].amount)}
              </div>
            </Tooltip>
          }
        />
      })}
      <Column dataIndex="quaterAmount" fixed="right" width={100}
        title={now.format("[Q]Q YYYY")}
        render={(val) => <div className={clsx(
          'text-center rounded h-8 py-1',
        )}>
          {shortNumber(val)}
        </div>}
      />
      <Column fixed="right" width={40}
        title={<GearIcon className='text-gray-500' />}
        render={() => <ArrowTopRightIcon className='text-gray-500' />}
      />
    </Table>
  )
}
