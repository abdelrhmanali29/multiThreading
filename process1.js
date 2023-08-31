const {fork, exec, spawn} = require('child_process');
const redis = require('redis');
let redisClient;

let key = process.argv[0]

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  redisClient.on('connect', () => {
  console.log('Process 1 connected');
})

  await redisClient.connect();
   let result =  await redisClient.hGet('changes', key)  // if it's exist in changes >> get last one
  if(result == null) result = await redisClient.hGet('main', key)
  
  console.log(result);
  console.log("Process 1 finished")
})();

process.exit();