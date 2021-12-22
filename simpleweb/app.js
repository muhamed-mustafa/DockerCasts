const express = require('express');
      app     = express();

app.get('/' , (req , res) =>
{
    res.send(`How are u doing ?`);
});

const PORT = 8080 || process.env.PORT;
app.listen(PORT , () => console.log(`Server Running on port ${PORT}`));