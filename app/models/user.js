var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

  initialize: function(){
    this.on('creating', function(model, attr, options){
      var username = this.get('username');
      var password = model.get('password');
      var hash = bcrypt.hashSync(password, null)
      model.set('password', hash);
    })
  }
});

module.exports = User;