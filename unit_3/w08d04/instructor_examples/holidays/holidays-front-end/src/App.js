import React from 'react'
import './css/normalize.css'
import './css/skeleton.css'
import './css/index.css'
import NewForm from './components/NewForm.js'
// import ballons from './images/two-balloon-icons-68911.png'
// import pencil from './images/simpleiconDOTcom-pen-15-64x64.png'
import Show from './components/Show.js'
// import UpdateForm from './components/UpdateForm.js'
let baseURL = process.env.REACT_APP_BASEURL

//alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

console.log('current base URL:', baseURL)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      holidays: [],
      holiday: null
    }
    this.getHolidays = this.getHolidays.bind(this)
    this.handleAddHoliday = this.handleAddHoliday.bind(this)
    this.deleteHoliday = this.deleteHoliday.bind(this)
    this.toggleCelebrated = this.toggleCelebrated.bind(this)
    this.getHoliday = this.getHoliday.bind(this)
  }
  componentDidMount(){
    this.getHolidays()
  }

  async getHolidays (){
    try {
      // the async request code you want to try
      let response = await fetch(`${baseURL}/holidays`)
      let data = await response.json()
      this.setState({holidays: data})
    }catch(e){
      // what happens when you get an error
      console.error(e)
    }
  }
  handleAddHoliday(holiday) {
    const copyHolidays = [holiday, ...this.state.holidays]
    this.setState({
      holidays: copyHolidays
    })
}

 async deleteHoliday (id){
   console.log(`I made a delete request to here: ${baseURL}/holidays/${id}`)
   try {
   let response = await fetch(baseURL + '/holidays/' +  id, {
      method: 'DELETE'
      })
      let data = await response.json()
      const foundHoliday = this.state.holidays.findIndex(holiday => holiday._id === id)
      const copyHolidays = [...this.state.holidays]
      copyHolidays.splice(foundHoliday, 1)
      this.setState({holidays: copyHolidays})
   } catch(e){
     console.error(e)
   }
 }

async toggleCelebrated (holiday){
  console.log(holiday)
  try{
  let response = await fetch(baseURL + '/holidays/' + holiday._id, {
    method: 'PUT',
    body: JSON.stringify({celebrated: !holiday.celebrated}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  let updatedHoliday = await response.json()
  const foundHoliday = this.state.holidays.findIndex(foundItem => foundItem._id === holiday._id)
  const copyHolidays = [...this.state.holidays]
  copyHolidays[foundHoliday].celebrated = updatedHoliday.celebrated
  console.log(updatedHoliday)
  this.setState({holidays: copyHolidays})
  }catch(e){
    console.error(e)
  }
}
getHoliday(holiday) {
  this.setState({holiday: holiday})
  console.log(holiday)
}


 render () {
   return (
     <div className='container'>
      <h1>Holidays! Celebrate!</h1>
        <NewForm handleAddHoliday={this.handleAddHoliday} baseURL={baseURL}/>
        <table>
    <tbody>
      { this.state.holidays.map(holiday => {
          return (
            <tr key={holiday._id} onMouseOver={() => this.getHoliday(holiday)}>
              <td  onDoubleClick={() => this.toggleCelebrated(holiday)}
                className={holiday.celebrated
                  ? 'celebrated'
                  : null }>
                  {holiday.name } and its {holiday.celebrated ? 'celebrated': 'not celebrated' }
                </td>
              <td onClick={()=>{ this.deleteHoliday(holiday._id)}}>X</td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
  {/* This is conditional rendering */}
  { this.state.holiday
        ? <Show holiday={this.state.holiday}/>
        : null }
     </div>
   )
 }

}

export default App
