import { Instance, SnapshotIn, SnapshotOut, applySnapshot, types } from "mobx-state-tree";
import { TargetStore } from "./target.store";
import { IndicatorStore } from "./indicator.store";
import { useMemo } from "react";

let rootStore: IRootStore | undefined

export const RootStore = types
  .model("RootStore", {
    targetStore: types.optional(TargetStore, {
      targets: []
    }),
    indicatorStore: types.optional(IndicatorStore, {
      indicators: []
    }),
  })

export type IRootStore = Instance<typeof RootStore>
export type IRootStoreSnapshotIn = SnapshotIn<typeof RootStore>
export type IRootStoreSnapshotOut = SnapshotOut<typeof RootStore>

export function initializeStore(snapshot = null) {
  const _store = rootStore ?? RootStore.create({
    indicatorStore: {
      indicators: []
    },
    targetStore: {
      targets: []
    }
  })

  if (snapshot) {
    applySnapshot(_store, snapshot)
  }
  if (typeof window === 'undefined') return _store
  if (!rootStore) rootStore = _store

  return rootStore
}

export function useRootStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
