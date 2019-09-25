import React from 'react';
import './style.scss'
// import { Chart, Axis, Geom, Tooltip } from 'bizcharts'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          yearData: [
            { year: "1991", value: 3 },
            { year: "1992", value: 4 },
            { year: "1993", value: 3.5 },
            { year: "1994", value: 5 },
            { year: "1995", value: 4.9 },
            { year: "1996", value: 6 },
            { year: "1997", value: 7 },
            { year: "1998", value: 9 },
            { year: "1999", value: 13 }
          ]
        }
    }

    renderItem = (item,index) => {
      const indexs = index;
      return (
        <p key={index}>{item}</p>
      )
    }

    render(){
      const { yearData } = this.state;
      return (
        <div className="test">
          {
            yearData.map((res,index) => this.renderItem(res.year,index))
          }
        </div>
      )   
    }
}