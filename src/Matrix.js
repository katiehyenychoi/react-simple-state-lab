import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => {
    // console.log(this.props) //an obj that has the default prop as a key (obj)
    // console.log(this.props.values) //the default prop array (top array)
    // console.log(vals) //an array of 10 elems (one array)

    // return vals.map(val => ) // replace me and render a cell component instead!
    return vals.map(val => <Cell value={val} />)
    //Here! we are specifying our Cell component should have a value prop.
    // console.log(val)//ex "#F00"
    //

  }

  genMatrix = () => {
    // console.log(this.props.values) //10 arrays
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }


  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: [
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  ]


}
