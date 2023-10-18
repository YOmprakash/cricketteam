// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    manOfTheMatch,
    result,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-card-container">
      <div className="team-place-details">
        <p className="">{competingTeam}</p>
        <p className="">{date}</p>
        <p className="">{venue}</p>
        <p className="">{result}</p>
      </div>
      <img src={competingTeamLogo} alt="team logo" className="team-logo" />
      <div className="innings-container">
        <p className="">First Innings</p>
        <p className="">{firstInnings}</p>
        <p className="">Second Innings</p>
        <p className="">{secondInnings}</p>
        <p className="">Man of the match</p>
        <p className="">{manOfTheMatch}</p>
        <p className="">Umpairs</p>
        <p className="">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
