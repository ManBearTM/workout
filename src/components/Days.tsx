import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { IState, Day } from '../models'
import { IAsync, IProps, IParams } from '../types'
import { addDays } from '../actions'
import { AppParams } from '../containers/App'

export interface DaysParams { id: number }
export interface DaysProps extends IProps, IParams<AppParams, DaysParams> {
  days: IAsync<Day>
}

const mapStateToProps = (state: IState) => ({ days: state.days })

class Days extends React.Component<DaysProps, {}> {
  componentDidMount() {
    this.props.dispatch(
      addDays(this.fetchDays())
    );
  }

  fetchDays() {
    const { params } = this.props
    return fetch('https://wger.de/api/v2/day/?training=' + params.id, {
      headers: { authorization: 'Token ' + params.token }
    }).then(response => response.json())
  }

  render() {
    const { days, params } = this.props
    
    return (
      <div style={{marginTop:'10%'}}>
        <div className="row">
          <input className="button u-pull-right" type="button" value="Create workout" title="Currently unavailable" disabled />
          <h4 className="six-columns">Days</h4>
        </div>
        <div className="row" style={{marginTop:'2.5%'}}>
          <p className="nine columns">This is a list of workouts to be performed on given days. This is currently all there is to this demo.</p>
        </div>
        {days.items.map(day =>
          <div key={day.id}>
            <hr />
            <h5>{day.description}</h5>
          </div>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Days)