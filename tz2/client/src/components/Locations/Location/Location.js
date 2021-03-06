import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as locationsActions from '../../../redux/actions'

import React from 'react'

import locateImg from '../../../assets/images/locate.png'

import './Location.css'

class Location extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newLocStr: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.updateInputValue = this.updateInputValue.bind(this)
  }

  handleSubmit() {
    this.setState({ newLocStr: '' })
    this.props.checkLocation(this.props.locSlot, this.state.newLocStr)
  }

  updateInputValue(e) {
    console.log(e.target)
    if (e.target === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      this.handleSubmit()
    }
    this.setState({ newLocStr:  e.target.value })
  }

  handleKeyDown(e) {
   if (e.key === 'Enter') {
     e.preventDefault();
     e.stopPropagation();
     this.handleSubmit();
   }
 }

  render() {
    let location = this.props.locations[this.props.locSlot]
    const pretty = (num) => (num).toFixed(2)

    let color = this.props.locSlot?'green':'blue'

    return (
      <div id="Location" className={`${color}-border`}>
        <span className="label">Location:</span>
        <span>{location.locStr}</span>
        <br />
        <span className="label">Coords:</span>
        <span>{`${pretty(location.lat)}, ${pretty(location.lon)}`}</span>
        <br />
        <span className="label">TZ Name:</span>
        <span>{location.timeZoneName}</span>
        <br />
        <span className="label">TZ ID:</span>
        <span>{location.timeZoneId}</span>
        <br />
        <span className="label">GMT Offset:</span>
        <span>{location.rawOffset}</span>
        <br />
        <span className="label">In DST:</span>
        <span>{location.dstOffset?'yes':'no'}</span>
        <form>
          Enter new location:<br />
          <input type="text" name="location"
            value={this.state.newLocStr}
            onChange={this.updateInputValue}
            onKeyDown={this.handleKeyDown}
          />
          <span className="submitBtn" onClick={this.handleSubmit}>+</span>
          <button className="locateBtn">
            <img src={locateImg} />
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { locations: state.locations }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...locationsActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)
