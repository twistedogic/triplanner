import React, { PropTypes,Component  } from 'react'
import scriptLoader from 'react-async-script-loader'
import '../css/style.css'

class Map extends Component {
  constructor(){
    super()
    this.state = {
      fresh:true
    }
  }
  
  shouldComponentUpdate(){
    return false
  }
  
  componentWillReceiveProps (nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed  } = nextProps
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished 
      if (isScriptLoadSucceed) {
       this.map = new google.maps.Map(this.refs.map,{
        center: { lat:-34.2, lng:150 },
        zoom: 8
      })
        
      }
      else this.props.onError()
    }
  }

  render(){
    return (
      <div id="map" ref="map"/>
    )
  }
}

const LoadedMap = scriptLoader([
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
])(Map)

export default LoadedMap
