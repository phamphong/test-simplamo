import {
  types,
} from 'mobx-state-tree'
import { UserModel } from './user.store'

export enum MilestoneStatusEnum {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED"
}

export const MilestoneStatus = Object.keys(MilestoneStatusEnum);

export const Milestone = types.model("Milestone", {
  title: types.string,
  user: UserModel,
  percent: types.number,
  statusName: types.string,
  status: types.enumeration("Status", MilestoneStatus),
})
