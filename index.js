const express = require('express');

const app = express();
const port = 5000;

const a = {
  name: 'amit',
  phone: '8209491585',
};
app.get('/', (req, res) => {
  res.send('App works!!');
});

app.get('/api/user', async (req, res) => {
  try {
    res.json({
      msg: 'Sucess',
      Code: 200,
      data: a,
    });
  } catch (error) {
    res.json({
      msg: 'Error',
      Code: 404,
      err: error,
    });
  }
});

//  res.json({
//       msg: "Error",
//       Code: 404,
//       err: error,
//     });
app.listen(port, (err) => {
  console.log(`running server on from port:::::::${port}`, err);
});
