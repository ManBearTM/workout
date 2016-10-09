import { IAsync } from './types'

export interface IState {
  schedules: IAsync<Schedule>
  scheduleSteps: IAsync<ScheduleStep>
  workouts: IAsync<Workout>
  days: IAsync<Day>
}

export interface Schedule {
  id: number
  name: string
  start_date: string
  is_active: boolean
}

export interface ScheduleStep {
  id: number
  schedule: number
  workout: number
  duration: number
  order: number
}

export interface Workout {
  id: number
  comments: string
}

export interface Day {
  id: number
  description: string
  training: number
  day: number[]
}

export default IState