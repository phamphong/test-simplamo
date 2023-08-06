import { useMemo } from 'react'
import {
  applySnapshot,
  Instance,
  SnapshotIn,
  SnapshotOut,
  types,
  cast,
  flow,
  destroy,
} from 'mobx-state-tree'
import { Milestone } from './milestone.store'
import axios from 'axios';

export enum TargetStatusEnum {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED"
}

let targetStore: ITargetStore | undefined

export const TargetStatus = Object.keys(TargetStatusEnum);

const Target = types.model("Target", {
  title: types.string,
  statusName: types.string,
  status: types.enumeration("Status", TargetStatus),
  percent: types.number,
  milestones: types.array(Milestone),
})

export const TargetStore = types
  .model("TargetStore", {
    targets: types.optional(types.array(Target), []),
  })
  .actions((self) => {
    const update = (list: ITarget[]) => {
      destroy(self.targets);
      list.forEach(i => self.targets.push(i))
    }

    const addTarget = (target: ITarget) => {
      self.targets.push(target);
    }

    const load = flow(function* loadBooks() {
      try {
        let res = yield axios.get("/api/target", {
          baseURL: process.env.BASE_URL
        })
        update(res.data.data)
      } catch (err) {
        console.error("Failed to load targets", err)
      }
    })

    return { load, update, addTarget }
  })

export type ITarget = Instance<typeof Target>
export type ITargetStore = Instance<typeof TargetStore>
export type ITargetStoreSnapshotIn = SnapshotIn<typeof TargetStore>
export type ITargetStoreSnapshotOut = SnapshotOut<typeof TargetStore>

export function initializeTargetStore(snapshot = null) {
  const _store = targetStore ?? TargetStore.create({
    targets: []
  })

  if (snapshot) {
    applySnapshot(_store, snapshot)
  }
  if (typeof window === 'undefined') return _store
  if (!targetStore) targetStore = _store

  return targetStore
}

export function useTargetStore(initialState: any) {
  const store = useMemo(() => initializeTargetStore(initialState), [initialState])
  return store
}
