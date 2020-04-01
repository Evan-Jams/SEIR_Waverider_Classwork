import React, {Component} from 'react'
import Chart from 'chart.js'


class LineChart extends Component {
  componentDidMount(){
	   this.getData(this.props.id)
  }
  async getData(id){
    try{
      const response = await fetch(`/ice_creams/${id}`)
      const iceCream = await response.json()
      const preparedData = this.prepareData(iceCream)
      this.createChart(preparedData)
    } catch(err){
      console.error(err)
    }
  }

  prepareData (data) {
    const chartData = {
        labels: [],
        datasets: [
          {
            label: 'Pints Sold',
            data: []
          },
      		{
      			label: 'Pints Made',
      			data: []
      		}
        ]
    }
    data.pints.forEach(pint => {
     chartData.labels.push(pint.month)
     chartData.datasets[0].data.push(pint.pints_sold)
     chartData.datasets[1].data.push(pint.pints_made)
    })
    return chartData
  }

  createChart(data){
    const ctx = document.querySelector(`#pints-${this.props.id}`)
    const pintsChart = new Chart(ctx, {
      type: 'line',
      data: data
    })
    return pintsChart
  }

  render(){
    return(
      <>
        <h1>{}</h1>
        <canvas id={`pints-${this.props.id}`} width="300" height="100"></canvas>
      </>
    )
  }
}

export default LineChart;
