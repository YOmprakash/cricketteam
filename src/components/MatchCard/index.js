// Write your code here
import './index.css'

const MatchCard = props => {
  const {latestMatchDetails} = props
  const {
    result,

    competingTeam,
    competingTeamLogo,

    matchStatus,
  } = latestMatchDetails
  const statusClassName = matchStatus === 'Won' ? 'win' : 'loss'
  return (
    <li className="match-card-item">
      <img src={competingTeamLogo} alt="team banner" className="card-image" />
      <h1 className="team-name">{competingTeam}</h1>
      <p className="team-result">{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
