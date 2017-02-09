var gulp = require('flarum-gulp');

gulp({
  modules: {
    'srdgame/auth-erpnext': [
      'src/**/*.js'
    ]
  }
});
