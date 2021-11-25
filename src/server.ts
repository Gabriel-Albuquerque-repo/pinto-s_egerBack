// eslint-disable-next-line import/no-unresolved
import App from '@app';

const { app } = new App();

app.listen(
  process.env.PORT_SERVER,
  // eslint-disable-next-line no-console
  () => console.log('Server running on PORT:', process.env.PORT_SERVER),
);
