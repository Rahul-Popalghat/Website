const express = require('express');
const app = express();
const csv = require('csv-parser');
const fs = require('fs');
const csvdata =[];
const flipkart =[];


fs.createReadStream('offers.csv')
  .pipe(csv())
  .on('data', (data) => csvdata.push(data))
  .on('end', () => {
  //  console.log(csvdata.header[0])
  });

//   csv({
//     mapValues: ({ header, index}) => value.trim();
//   })

fs.createReadStream('flipkart_offers.csv')
  .pipe(csv())
  .on('data', (data) => flipkart.push(data))
  .on('end', () => {
  //  console.log(csvdata.header[0])
  });

app.use(express.static(__dirname));



app.get('/', (req, res)=>{
   
res.setHeader('Content-Type', 'text/html')
res.sendFile('index.html');


});

app.get('/allstore', (req, res)=>{
  console.log(req.baseUrl) 
   res.send(csvdata)
} );

app.get('/flipkart', (req, res)=>{
    res.send(flipkart);
 } );

app.listen(5000)
