import React from "react"
import PropTypes from "prop-types"
import ImPropTypes from "react-immutable-proptypes"

const Headers = ( { headers } )=>{
  return (
    <div>
      <h5>Response headers</h5>
      <pre>{headers}</pre>
    </div>)
}
Headers.propTypes = {
  headers: PropTypes.array.isRequired
}

const Duration = ( { duration } ) => {
  return (
    <div>
      <h5>Request duration</h5>
      <pre>{duration} ms</pre>
    </div>
  )
}
Duration.propTypes = {
  duration: PropTypes.number.isRequired
}


export default class LiveResponse extends React.Component {
  static propTypes = {
    response: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    displayRequestDuration: PropTypes.bool.isRequired
  }

  render() {
    const { request, response, getComponent, displayRequestDuration } = this.props

    const status = response.get("status")
    const url = response.get("url")
    const headers = response.get("headers").toJS()
    const notDocumented = response.get("notDocumented")
    const duration = response.get("duration")
    const headersKeys = Object.keys(headers)

    const Curl = getComponent("curl")

    return (
      <div>
        { request && <Curl request={ request }/> }
      </div>
    )
  }

  static propTypes = {
    getComponent: PropTypes.func.isRequired,
    request: ImPropTypes.map,
    response: ImPropTypes.map
  }
}
