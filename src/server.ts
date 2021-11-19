/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import app from './app';

app.listen(
  process.env.PORT_SERVER,
  () => console.log('Server running on PORT:', process.env.PORT_SERVER),
);
