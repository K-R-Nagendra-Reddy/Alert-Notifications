// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  console.log(props)
  const {children} = props
  return (
    <li className="list-item">
      <h1>{children[0]}</h1>
      <>{children[1]}</>
      <GrFormClose />
      <p>{children[2]}</p>
    </li>
  )
}
export default Notification
