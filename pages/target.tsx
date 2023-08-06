import { getSnapshot } from 'mobx-state-tree'
import { TabLayout } from '@/components/layout/layout-tab';
import { DatePicker } from '@/ui-components/date-picker';
import Button from '@/ui-components/button';
import { Avatar, AvatarGroup } from '@/ui-components/avatar';
import Input from '@/ui-components/input';
import {
  MagnifyingGlassIcon, MixerHorizontalIcon,
  PlusCircledIcon, TriangleDownIcon, TriangleRightIcon,
  HomeIcon
} from '@radix-ui/react-icons';
import FlexContainer from '@/ui-components/flex-container';
import Chip from '@/ui-components/chip';
import { TargetList } from '@/components/target/target-list';
import { initializeStore, IRootStore } from '@/store/root.store';

export default function Target({ initialState }: { initialState: IRootStore }) {
  const data = initialState.targetStore.targets;
  return <>
    <main className="bg-gray-100">
      <FlexContainer.FlexGroupBetween className='px-4 py-2 bg-white border-b'>
        <FlexContainer.FlexGroup>
          <DatePicker picker='quarter' />
          <Button solid className='!ring-gray-100 !bg-gray-100 !text-black font-normal' >Cá nhân</Button>
          <AvatarGroup maxCount={3}>
            <Avatar src='' name="P" />
            <Avatar src='' name="M" />
            <Avatar src='' name="P" />
            <Avatar src='' name="M" />
            <Avatar src='' name="P" />
            <Avatar src='' name="M" />
          </AvatarGroup>
        </FlexContainer.FlexGroup>
        <FlexContainer.FlexGroup>
          <Input
            prefix={<MagnifyingGlassIcon width="1em" height="1em" />}
            suffix={<div className='rounded bg-gray-100 ring-1 ring-gray-300'>
              <MixerHorizontalIcon width="1em" height="1em" />
            </div>}
          />
          <Button
            prefix={<PlusCircledIcon width="1em" height="1em" />}
            suffix={<TriangleDownIcon width="1em" height="1em" />}
          >Tạo mục tiêu</Button>
        </FlexContainer.FlexGroup>
      </FlexContainer.FlexGroupBetween>
      <div className='px-4 py-2 text-sm'>
        <div className='px-4 py-2 rounded-md bg-primary-200 shadow-inner'>
          <FlexContainer.FlexGroupBetween className='mb-2'>
            <FlexContainer.FlexGroup>
              <Button shape='circle'
                bordered={false} className='shadow-md'
                prefix={<HomeIcon width="1em" height="1em" />}
              />
              <h4 className='text-primary font-semibold'>Mục tiêu công ty</h4>
              <div className='text-primary-400'>{data.length} mục tiêu</div>
            </FlexContainer.FlexGroup>
            <FlexContainer.FlexGroup>
              <Button size='small'
                prefix={<TriangleRightIcon width="1em" height="1em" />}
              >Hiện cột mốc</Button>
              <Chip type='primary' solid
                className='bg-primary-200 ring-primary-200 shadow-md !text-primary font-semibold'
              >0/{data.length} = 0%</Chip>
            </FlexContainer.FlexGroup>
          </FlexContainer.FlexGroupBetween>
          {/* Target List Here */}
          <TargetList list={data} />
          {/* Target List Here */}
        </div>
      </div>
    </main>
  </>
}

export async function getServerSideProps() {
  const store = initializeStore()

  await store.targetStore.load();

  return { props: { initialState: getSnapshot(store) } }
}


Target.getMenu = () => {
  return (
    <TabLayout value="target" />
  )
}
