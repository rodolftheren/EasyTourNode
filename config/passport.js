var LocalStrategy  = require('passport-local').Strategy;

const cifrador = require('../modules/cifrado');
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);


connection.query('USE ' + dbconfig.database);

module.exports = (passport) =>
{
    passport.serializeUser((user, done) =>
    {
        console.log("deserializeUser "+user.id_usu);
        done(null, user.id_usu);
    });
    passport.deserializeUser((id, done) =>
    {

    });

    passport.use(
        'local-login',
        new LocalStrategy(
        {
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true
        },
        (req, username, password, done) =>
        {
            var est= valid.login(username, password);
            if (est)
              return done(null, false, req.flash('loginMessage', est));
        })
    );




};
