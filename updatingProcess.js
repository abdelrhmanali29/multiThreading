const redis = require('redis');
let redisClient;

let key = process.argv[0], newValue = process.argv[1];

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  redisClient.on('connect', () => {
  console.log('Updating process connected');
})

  await redisClient.connect();

  let oldValue = await redisClient.hGet('main', key);

  await redisClient.hSet('main', key, newValue);

  await redisClient.hSet('changes',key, oldValue);

  console.log("Updating Process finished");
})();


