import Container from '../components/Container'
import Card from '../components/Card'
import CardHolder from '../components/CardHolder'

function UpcomingEvents (props) {
  return (
    <Container isPadded>

      <h2>Upcoming events</h2>

      <CardHolder>
        {props.events.map(({ name, img, link, date, time }) => {
          const descText = time ? `${date} • ${time}` : date
          return (
            <Card
              key={name}
              href={link}
              title={name}
              img={img}
              text={descText}
            />
          )
        })}
      </CardHolder>

    </Container>
  )
}

export default UpcomingEvents
