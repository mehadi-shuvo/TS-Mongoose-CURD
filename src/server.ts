import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

//config add;
const port = config.port;
const db_url = config.db_url;

async function main() {
  try {
    await mongoose.connect(db_url as string);

    app.listen(port, () => {
      console.log(
        `⚡️[server]:Mongoose Server is running at http://localhost:${port}. All done!`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
