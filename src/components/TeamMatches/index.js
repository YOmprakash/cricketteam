// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchData: []}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const formatData = {
      teamBannerUrl: data.team_banner_url,
      latestMatches: {
        id: data.latest_match_details.id,
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },

      recentMatches: {
        id: data.recent_matches.id,
        umpires: data.recent_matches.umpires,
        result: data.recent_matches.result,
        manOfTheMatch: data.recent_matches.man_of_the_match,
        date: data.recent_matches.date,
        venue: data.recent_matches.venue,
        competingTeam: data.recent_matches.competing_team,
        competingTeamLogo: data.recent_matches.competing_team_logo,
        firstInnings: data.recent_matches.first_innings,
        secondInnings: data.recent_matches.second_innings,
        matchStatus: data.recent_matches.match_status,
      },
    }

    console.log(formatData)
    this.setState({
      teamMatchData: formatData,
    })
  }

  renderRecentTeam = () => {
    const {teamMatchData} = this.state
    const {recentMatches} = teamMatchData
    return (
      <ul className="match-card-ul-container">
        {recentMatches.map(each => (
          <MatchCard key={each.id} recentMatchDetail={each} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamMatchData} = this.state
    const {teamBannerUrl, latestMatches} = teamMatchData
    return (
      <div className="match-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatchDetails={latestMatches} />
        {this.renderRecentTeam()}
      </div>
    )
  }

  render() {
    return (
      <div className="team-match-container">{this.renderTeamMatches()}</div>
    )
  }
}

export default TeamMatches
