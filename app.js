const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      translate = require('google-translate-api');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res)=>{res.render('index')});
app.post('/translated', (req, res)=>{
  let text = req.body.text;
  translate(text, {to: 'bn'}).then(response => {
    console.log(response.text)
   // res.send(response.text)
   res.render('translated', {text: response.text})
  }).catch(err => {
    console.error(err);
  });
})
app.listen(process.e­nv.PORT || 3000,()=>{console.lo­g(`Server connected on port $ {process.env.PORT}`­)});

