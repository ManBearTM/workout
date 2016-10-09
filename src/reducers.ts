import { handleActions } from 'redux-actions'
import { addSchedules, addScheduleSteps, addWorkouts, addDays } from './actions'
import { IAsync, IResponse } from './types'
import { Schedule, Workout, Day } from './models'

const asyncDefault: IAsync<any> = {
  isFetching: false,
  items: []
}

export const schedules = handleActions<IAsync<Schedule>, IResponse<Schedule>>({
  [<any>addSchedules]: (state, action) => ({
    isFetching: false,
    items: action.payload.results
  })
}, asyncDefault)

export const scheduleSteps = handleActions<IAsync<Schedule>, IResponse<Schedule>>({
  [<any>addScheduleSteps]: (state, action) => ({
    isFetching: false,
    items: action.payload.results
  })
}, asyncDefault)

export const workouts = handleActions<IAsync<Workout>, IResponse<Workout>>({
  [<any>addWorkouts]: (state, action) => ({
    isFetching: false,
    items: action.payload.results
  })
}, asyncDefault)

export const days = handleActions<IAsync<Day>, IResponse<Day>>({
  [<any>addDays]: (state, action) => ({
    isFetching: false,
    items: action.payload.results
  })
}, asyncDefault)