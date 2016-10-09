import { RouteComponentProps } from 'react-router'
import { Dispatch } from 'react-redux'
import IState from './models'

export interface IAsync<T> {
  isFetching: boolean
  items: T[]
}

export interface IResponse<T> { results: T[] }
export interface IParams<P, R> extends RouteComponentProps<P & R, R> {}
export interface IProps { dispatch: Dispatch<IState> }