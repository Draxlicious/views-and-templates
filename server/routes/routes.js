module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {
         "titel": "min fancy forside",
         "page": "home",
         "footer": "farve"
      });
   });


   app.get('/product', (req, res, next) => {
      res.render('product', {
         "title": "Produkt",
         "page": "product"
      });
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact',{
         "title": "Kontakt",
         "page": "contact"
      });
   });

   // 
   app.get('/nyroute', (req, res, next) => {
      // res.render('nyroute');
      res.send();
      
   });

};
