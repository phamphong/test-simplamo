
type User = {
  name: string;
  avatar?: string;
}

type MilestoneItem = {
  title: string;
  status: string;
  statusName: string;
  percent: number;
  user: User;
}

type TargetItem = {
  title: string;
  status: string;
  statusName: string;
  percent: number;
  milestone: MilestoneItem[];
}
