import { User } from '../models'
import usersData = require('../../../data/users.json')
const users: User[] = usersData

export class UserService {

  static find() {
    return users || []
  }

  static findById(id: string) {
    for (const user of users) {
      if (user.id === id) {
        return user
      }
    }
    return
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

  static save(user: User) {
    users.push(user)
  }

  static deleteById(id: string) {
    for (const key in users) {
      if (users.hasOwnProperty(key)) {
        const user = users[key]
        if (user.id === id) {
          users.splice(Number.parseInt(key), 1)
          return true
        }
      }
    }
    return false
  }

  static updateById(id: string, user: User) {
    for (const key in users) {
      if (users.hasOwnProperty(key)) {
        if (users[key].id === id) {
          users[key] = { ...users[key], ...user }
          return users[key]
        }
      }
    }
    return
  }
}
