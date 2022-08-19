import Container from '../components/Container'
import NextEvent from './NextEvent'
import UpcomingEvents from './UpcomingEvents'

const EVENT_TYPES = {
  meeting: 'Meeting'
}

const events = [
  {
    name: 'First Meeting',
    date: 'Sept. 1st',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    desc: 'Come join us for our first meeting of the year! We will be discussing our plans for the year and what we want to accomplish. We will be meeting on Discord and in the Lower Level of SJSU Library. We hope to see you there!'
  },
  {
    name: 'Meeting',
    date: 'Sept. 8th',
    time: '7:30 PM PST'
  },
  {
    name: 'Meeting',
    date: 'Sept. 15th'
  },
  {
    name: 'Meeting',
    date: 'Sept. 22nd'
  },
  {
    name: 'Meeting',
    date: 'Sept. 29th'
  },
  {
    name: 'Meeting',
    date: 'Oct. 6th'
  },
  {
    name: 'Meeting',
    date: 'Oct. 13th'
  },
  {
    name: 'Meeting',
    date: 'Oct. 20th'
  }
]

function Events () {
  return (
    <div>

      <Container isPadded>
        <h1>EVENTS</h1>
        All events are subject to change.
      </Container>

      <NextEvent event={events[0]} />

      <UpcomingEvents events={events.slice(1)} />
    </div>
  )
}

export default Events
