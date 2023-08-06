import { TabLayout } from '@/components/layout/layout-tab';
import Button from '@/ui-components/button';
import Input from '@/ui-components/input';
import {
  MagnifyingGlassIcon, MixerHorizontalIcon,
  PlusCircledIcon, TriangleDownIcon,
} from '@radix-ui/react-icons';
import FlexContainer from '@/ui-components/flex-container';
import { Avatar, AvatarGroup } from '@/ui-components/avatar';
import { RadioGroup } from '@/ui-components/radio-group';
import { IRootStore, initializeStore } from '@/store/root.store';
import { getSnapshot } from 'mobx-state-tree';
import { IndicatorTable } from '@/components/indicator/indicator-table';


export default function Indicator({ initialState }: { initialState: IRootStore }) {
  let data = initialState.indicatorStore.indicators;

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
        <IndicatorTable data={data} />
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
