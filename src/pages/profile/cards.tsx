import CardsList from 'components/CardsList'
import Profile from 'templates/Profile'

import mockCards from '../../components/PaymentOptions/mock'

export default function Cards() {
  return (
    <Profile>
      <CardsList cards={mockCards} />
    </Profile>
  )
}
