module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {"titel": "min fancy forside"});
   });


   app.get('/product', (req, res, next) => {
      res.render('product');
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });

   // 
   app.get('/nyroute', (req, res, next) => {
      // res.render('nyroute');
      res.send();
      
   });

};
