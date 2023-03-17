import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import EventCard from './EventCard';

export default function Root() {
  return (
    <>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid mt={3} mb={3} md={4} sm={6} xs={12}>
            <EventCard />
          </Grid>
          <Grid mt={3} mb={3} md={4} sm={6} xs={12}>
            <EventCard />
          </Grid>
          <Grid mt={3} mb={3} md={4} sm={6} xs={12}>
            <EventCard />
          </Grid>
          <Grid mt={3} mb={3} md={4} sm={6} xs={12}>
            <EventCard />
          </Grid>
        </Grid>
      </Container>
      {/* <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <div>
          <form id='search-form' role='search'>
            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Search'
              type='search'
              name='q'
            />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <form method='post'>
            <button type='submit'>New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/login`}>Login</a>
            </li>
            <li>
              <a href={`/register`}>Register</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id='detail'></div> */}
    </>
  );
}
