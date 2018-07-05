import { User } from '../models'
import usersData = require('../../../data/users.json')
const users: User[] = usersData

export class UserRepository {

  static find() {
    return users
  }

  static findByUsernameAndPassword(username: string, password: string) {
    for (const user of users) {
      if (user.username === username && user.password === password) {
        return user
      }
    }
    return
  }

  static findByUsername(username: string) {
    for (const user of users) {
      if (user.username === username) {
        return user
      }
    }
    return
  }
}
