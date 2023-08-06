import { TabLayout } from '@/components/layout/layout-tab';
import Button from '@/ui-components/button';
import Input from '@/ui-components/input';
import {
  MagnifyingGlassIcon, MixerHorizontalIcon,
  PlusCircledIcon, TriangleDownIcon,
  GearIcon, ArrowTopRightIcon,
} from '@radix-ui/react-icons';
import FlexContainer from '@/ui-components/flex-container';
import { Avatar, AvatarGroup } from '@/ui-components/avatar';
import { Column, Table } from '@/ui-components/table';
import moment from 'moment';
import clsx from 'clsx';
import { Tooltip } from '@/ui-components/tooltip';
import { RadioGroup } from '@/ui-components/radio-group';
import { IRootStore, initializeStore } from '@/store/root.store';
import { getSnapshot } from 'mobx-state-tree';
import { IIndicator } from '@/store/indicator.store';
import { shortNumber } from '@/utils/number.util';


export default function Indicator({ initialState }: { initialState: IRootStore }) {
  let data = initialState.indicatorStore.indicators;
  let now = moment()

  return <>
    <main className="bg-gray-100">
      <FlexContainer.FlexGroupBetween className='px-4 py-2 bg-white border-b'>
        <FlexContainer.FlexGroup>
          <RadioGroup
            options={[
              { label: "Tuần", value: "week" },
              { label: "Tháng", value: "month" },
              { label: "Quý", value: "quater" },
              { label: "Năm", value: "year" },
            ]}
          />
          <AvatarGroup maxCount={6}>
            <Avatar src="" name="P" />
            <Avatar src='' name="M" />
            <Avatar src="" name="P" />
            <Avatar src="" name="M" />
            <Avatar src='' name="P" />
            <Avatar src="" name="M" />
            <Avatar src="" name="M" />
            <Avatar src="" name="M" />
            <Avatar src="" name="M" />
          </AvatarGroup>
        </FlexContainer.FlexGroup>
        <FlexContainer.FlexGroup>
          <Input placeholder='Tìm kiếm ...'
            prefix={<MagnifyingGlassIcon width="1em" height="1em" />}
            suffix={<MixerHorizontalIcon width="1em" height="1em" />}
          />
          <Button
            prefix={<PlusCircledIcon width="1em" height="1em" />}
            suffix={<TriangleDownIcon width="1em" height="1em" />}
          >Tạo chỉ số</Button>
        </FlexContainer.FlexGroup>
      </FlexContainer.FlexGroupBetween>
      <div className='px-4 py-2 text-xs'>
        <Table<IIndicator>
          data={data}
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
                suffix={<div>{shortNumber(record.target)}</div>}
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
      </div>
    </main>
  </>
}

export async function getServerSideProps() {
  const store = initializeStore()

  await store.indicatorStore.load();

  return { props: { initialState: getSnapshot(store) } }
}


Indicator.getMenu = () => {
  return (
    <TabLayout value="indicator" />
  )
}
