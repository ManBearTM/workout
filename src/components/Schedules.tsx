import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { IState, Schedule } from '../models'
import { IProps, IParams, IAsync } from '../types'
import { addSchedules } from '../actions'
import { AppParams } from '../containers/App'
import ScheduleSteps from '../components/ScheduleSteps'

export interface SchedulesProps extends IProps, IParams<AppParams, {}> {
  schedules: IAsync<Schedule>
}

const mapStateToProps = (state: IState) => ({ schedules: state.schedules })

class Schedules extends React.Component<SchedulesProps, {}> {
  componentDidMount() {
    this.props.dispatch(
      addSchedules(this.fetchSchedules())
    );
  }

  fetchSchedules() {
    return fetch('https://wger.de/api/v2/schedule/', {
      headers: { authorization: 'Token ' + this.props.params.token }
    }).then(response => response.json())
  }

  greeting() {
    const { name } = this.props.params
    return 'Hello' + (name == 'Voldemort' ? '' : ' ' + name)
  }

  render() {
    const { schedules, params } = this.props

    return (
      <div style={{marginTop:'10%'}}>
        <div className="row">
          <input className="button u-pull-right" type="button" value="Create schedule" title="Currently unavailable" disabled />
          <h4 className="six-columns">Schedules</h4>
        </div>
        <div className="row" style={{marginTop:'2.5%'}}>
          <p className="nine columns">{this.greeting()}! This is your list of scheduled workouts. The currently active schedule is indicated by a checkmark.</p>
        </div>
        {schedules.items.map(schedule =>
          <div key={schedule.id}>
            <hr />
            <h5>{schedule.is_active?'✓':'✗'} {schedule.name}</h5>
            <ScheduleSteps key={schedule.id} name={params.name} token={params.token} schedule={schedule.id} />
          </div>
          )}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Schedules)