import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { store } from '../../rematch/store';
import { history } from '../../helpers/history';
import { InputLabel, MenuItem, Select } from '@material-ui/core'
import './BreadCrumb.scss';

const BreadCrumb = props => {
  const {
      className,
      home,
      path,
      children,
      currentPeriod,
      periods,
      givenName,
      familyName
    } = props,
    [timePeriod, setTimePeriod] = useState(null)
  ;
  useEffect(() => {
    setTimePeriod(currentPeriod);
  },[props])
  ;
  return (
    <>
      <div className={ `site-navigation-arrow ${ className }` }>
        <a onClick={() => history.push(home) }
        >Home</a> { `> ${ timePeriod }` }
      </div>
      <div className={ `site-navigation-back ${ className }` }>
        <a onClick={() => history.push(path) }>{ `< Back` }</a>
      </div>
      <div className={ `site-navigation-header-dropdown ${ className }` }>
        <div className='user-name-title'>
          <p>{ `Hi, ${ givenName } ${ familyName }!` }</p>
        </div>
        { children }
        { timePeriod ?
          <div className='dropdown-right-box'>
            <InputLabel
              className='time-period-label-dropdown'
              id='demo-simple-select-placeholder-label-label'>
              Time Period
            </InputLabel>
            <Select
              labelId='demo-simple-select-placeholder-label-label'
              id='demo-simple-select-placeholder-label'
              value={ timePeriod }
              onChange={ evt => setTimePeriod(String(evt.target ?.value)) }
              displayEmpty
              defaultValue={ timePeriod }
              className='filtered selectEmpty'
            >
              {periods.map(({value}, index) => (
                <MenuItem
                  key={ index }
                  value={ value }
                  className='dropdown-options-customized'
                >
                  { value }
                </MenuItem>
              ))}
            </Select>
          </div> : null
        }
      </div>
    </>
  )
};

const mapStateToProps = (state, prevProps) => ({
  currentPeriod: state.grades.period,
  periods: store.select.grades.definePeriods(state.grades),
  givenName: state.user.givenName,
  familyName: state.user.familyName,
  ...prevProps
});

export default connect(mapStateToProps)(BreadCrumb);
