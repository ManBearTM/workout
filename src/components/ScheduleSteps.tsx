import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { IState, ScheduleStep } from '../models'
import { IProps, IParams, IAsync } from '../types'
import { addScheduleSteps } from '../actions'
import { AppParams } from '../containers/App'

export interface ScheduleStepsOwnProps {
  schedule: number
  token: string
  name: string
}
export interface ScheduleStepsProps extends
  ScheduleStepsOwnProps, IProps, IParams<AppParams, {}> {
  scheduleSteps: IAsync<ScheduleStep>
}

const mapStateToProps = (state: IState, ownProps: ScheduleStepsOwnProps) => ({
  schedule: ownProps.schedule,
  scheduleSteps: state.scheduleSteps
})

class ScheduleSteps extends React.Component<ScheduleStepsProps, {}> {
  
  componentDidMount() {
    this.props.dispatch(
      addScheduleSteps(this.fetchScheduleSteps())
    );
  }

  fetchScheduleSteps() {
    const { token, schedule, params } = this.props
    
    return fetch('https://wger.de/api/v2/schedulestep/?schedule=' + schedule, {
      headers: { authorization: 'Token ' + token }
    }).then(response => response.json())
    .catch(err => console.log(err))
  }

  render() {
    const { scheduleSteps, token, name } = this.props

    return (
      <div>
      {scheduleSteps.items.map(scheduleStep =>
        <div className="row" key={scheduleStep.id}>
          <Link to={`/${token}/${name}/${scheduleStep.workout}`}>Step {scheduleStep.order}</Link>
        </div>
      )}
      </div>
    )
  }
}

export default connect(mapStateToProps)(ScheduleSteps)