import MeetupList from '../components/meetups/meetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://thumbs.dreamstime.com/b/georgia-aquarium-atlanta-pemberton-place-atlanta-georgia-april-71012683.jpg',
    address: 'Meetupstreet 5, 12345 meetup city',
    description:
      'this is a first, amazing meetup which you definitely should not miss. It will blow your mind!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://thumbs.dreamstime.com/b/georgia-aquarium-atlanta-pemberton-place-atlanta-georgia-april-71012683.jpg',
    address: 'Meetupstreet 5, 12345 meetup city',
    description:
      'this is a first, amazing meetup which you definitely should not miss. It will blow your mind!',
  },
  {
    id: 'm3',
    title: 'This is a third meetup',
    image:
      'https://thumbs.dreamstime.com/b/georgia-aquarium-atlanta-pemberton-place-atlanta-georgia-april-71012683.jpg',
    address: 'Meetupstreet 5, 12345 meetup city',
    description:
      'this is a first, amazing meetup which you definitely should not miss. It will blow your mind!',
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1> All Meetups </h1> <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}
export default AllMeetupsPage;
