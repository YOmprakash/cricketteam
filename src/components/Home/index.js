import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamMatches: []}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const formatData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(formatData)
    this.setState({teamMatches: formatData})
  }

  render() {
    const {teamMatches} = this.state
    return (
      <div className="home-container">
        <div className="logo-head-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="home-heading">IPL Dashboard</h1>
        </div>
        <ul className="ul-container">
          {teamMatches.map(each => (
            <TeamCard key={each.id} teamCardDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
