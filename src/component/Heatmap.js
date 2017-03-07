import React, { PropTypes,Component } from "react"
import CalHeatMap from "cal-heatmap"
import "cal-heatmap/cal-heatmap.css"

const cmap = new CalHeatMap()

class HeatMap extends Component {
  componentDidMount(){
    const itemSelector = this.div
    const options = Object.assign({},this.props.options,{itemSelector})
    cmap.init(options)
  }
  shouldComponentUpdate(){
    return false
  }
  componentWillUnmount(){
    cmap.destroy()
  }
  render(){
    return (
      <div id="cal-heatmap" ref={c => {this.div = c}} />
    )
  }
}

HeatMap.propTypes = {
  options:PropTypes.object.isRequired
}

export default HeatMap
