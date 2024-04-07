const express = require('express');
const data = require("./vehicle-rental-system/vehicle-rental-system/MOCK_DATA.json");
const fs = require("fs");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended : false}));

app
  .route('/api/data')

  .get((req, res) => {
    return res.json(data);
  })

  .post((req, res) => {
    const body = req.body;
    data.push({...body, id : data.length + 1 });
    fs.writeFile('./vehicle-rental-system/vehicle-rental-system/MOCK_DATA.json', JSON.stringify(data), (err, resp) => {
      return res.json({status : "success", id : data.length});
    })
  })


app.get('/api/data/:id', (req, res) => {
  const id = Number(req.params.id);
    const dataId = data.find((dataId) => dataId.id === id);
    return res.json(dataId);
})

app.delete('/api/data/:id', (req, res) => {
  const email = req.params.id;
  const dataToDelete = data.find(elem => elem.email === email);
  const index = data.indexOf(dataToDelete);

  data.splice(index, 1);
  fs.writeFile('./vehicle-rental-system/vehicle-rental-system/MOCK_DATA.json', JSON.stringify(data), (err, resp) => {
    return res.json({status : "success"});
  })

})

app.listen(PORT, () => console.log("Server started"));