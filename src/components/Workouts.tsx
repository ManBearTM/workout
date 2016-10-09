import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { IState, Workout } from '../models'
import { IProps, IParams, IAsync } from '../types'
import { addWorkouts } from '../actions'
import { AppParams } from '../containers/App'

export interface WorkoutsProps extends IProps, IParams<AppParams, {}> {
  workouts: IAsync<Workout>
}

const mapStateToProps = (state: IState) => ({ workouts: state.workouts })

class Workouts extends React.Component<WorkoutsProps, {}> {
  componentDidMount() {
    this.props.dispatch(
      addWorkouts(this.fetchWorkouts())
    );
  }

  fetchWorkouts() {
    return fetch('https://wger.de/api/v2/workout/', {
      headers: { authorization: 'Token ' + this.props.params.token }
    }).then(response => response.json())
  }

  render() {
    const { workouts, params } = this.props

    return (
      <div>
        {workouts.items.map(workout =>
          <li key={workout.id}>
            <Link to={`/${params.token}/${params.name}/${workout.id}`}>{workout.id}</Link>
          </li>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Workouts)