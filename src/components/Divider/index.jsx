import sessionLine from '../../assets/images/session-line.png'
import { Line } from './styles'

export function Divider() {
  return (
    <Line>
      <img src={sessionLine} alt="" />
    </Line>
  )
}
