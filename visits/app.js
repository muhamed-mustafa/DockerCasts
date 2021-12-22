const express = require('express'),
      redis   = require('redis'),
      process = require('process'),
      app     = express();

const client  = redis.createClient({
    host : "redis-server",
    port : 6379
});
client.set('visits' , 0);

app.get('/' , (req , res) =>
{
   process.exit(0);
   client.get('visits' , (err , visits) =>
   {
       res.send(`Number of visits is ${visits}`);
       client.set('visits' , parseInt(visits) + 1);
   });
});

const PORT = 8081 || process.env.PORT;
app.listen(PORT , () => console.log(`Server Running on Port ${PORT}`));