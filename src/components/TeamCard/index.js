// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list-item">
        <img
          src={teamImageUrl}
          alt={`name ${name}`}
          className="team-card-image"
        />
        <h1 className="team-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
