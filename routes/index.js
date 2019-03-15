const aut = require('./auto.js');

const autorizacion = [aut.requiresLogin];
/* GET home page. */
module.exports = function(app, passport)
{
    //routes users
    app.get('/', aut.islog,(req, res, next) =>
    {
        res.render('index',
        {
            message: req.flash('loginMessage'),
            title: 'EasyTour'
        });
    });
    app.post('/iniciosesion', passport.authenticate('local-login',
    {
        successRedirect : '/inicio',
        failureRedirect : '/',
        failureFlash : true
    }));

    app.get('/inicio', autorizacion, cons.home);

    app.get('/sesion', autorizacion, (req, res) =>
    {
      res.render('sesion',
      {
        title: 'Sesión',
        user : req.user
      });
    });

    app.post('/sesion', autorizacion, cons.mcontraseña);

    app.get('/logout', autorizacion,(req, res) =>
    {
      req.logout();
      res.redirect('/');
    });

    // routes usuario
    //Example
    //
    // app.get('/cliente/chat', autorizacionc, (req, res) =>
    // {
    //   res.render('chat',
    //   {
    //     title: 'Chat',
    //     user : req.user
    //   });
    // });

    // app.get('/cliente/asesor', autorizacionc, consc.asesor);




};

module.exports = router;
