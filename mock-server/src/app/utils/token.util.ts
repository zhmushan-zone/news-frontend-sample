import { User } from '../models'
import { UserRepository } from '../repositories'

export const createToken = (user: User) => user.username

export const validateToken = (token: string) => UserRepository.findByUsername(token)
