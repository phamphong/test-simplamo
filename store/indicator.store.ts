import { useMemo } from 'react'
import {
  applySnapshot,
  Instance,
  SnapshotIn,
  SnapshotOut,
  types,
  flow,
  destroy,
} from 'mobx-state-tree'
import axios from 'axios';
import { UserModel } from './user.store';

let indicatorStore: IIndicatorStore | undefined

const TimeItem = types.model("TimeItem", {
  date: types.Date,
  amount: types.number,
  target: types.number,
})

const Indicator = types.model("Indicator", {
  title: types.string,
  user: UserModel,
  target: types.number,
  quaterAmount: types.number,
  times: types.array(TimeItem),
})

export const IndicatorStore = types
  .model("IndicatorStore", {
    indicators: types.optional(types.array(Indicator), []),
  })
  .actions((self) => {
    const update = (list: IIndicator[]) => {
      destroy(self.indicators);
      list.forEach(i => {
        i.times.map(k => k.date = new Date(k.date))
        self.indicators.push(i)
      })
    }

    const addIndicator = (indicator: IIndicator) => {
      self.indicators.push(indicator);
    }

    const load = flow(function* loadBooks() {
      try {
        let res = yield axios.get("/api/indicator", {
          baseURL: process.env.BASE_URL
        })
        update(res.data.data)
      } catch (err) {
        console.error("Failed to load indicators", err)
      }
    })

    return { load, update, addIndicator }
  })

export type IIndicator = Instance<typeof Indicator>
export type IIndicatorStore = Instance<typeof IndicatorStore>
export type IIndicatorStoreSnapshotIn = SnapshotIn<typeof IndicatorStore>
export type IIndicatorStoreSnapshotOut = SnapshotOut<typeof IndicatorStore>

export function initializeIndicatorStore(snapshot = null) {
  const _store = indicatorStore ?? IndicatorStore.create({
    indicators: []
  })

  if (snapshot) {
    applySnapshot(_store, snapshot)
  }
  if (typeof window === 'undefined') return _store
  if (!indicatorStore) indicatorStore = _store

  return indicatorStore
}

export function useIndicatorStore(initialState: any) {
  const store = useMemo(() => initializeIndicatorStore(initialState), [initialState])
  return store
}
