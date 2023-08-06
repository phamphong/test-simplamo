import {
  types,
} from 'mobx-state-tree'

export const UserModel = types.model("User", {
  name: types.string,
  avatar: types.string,
})
