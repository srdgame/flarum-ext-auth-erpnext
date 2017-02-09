'use strict';

System.register('srdgame/auth-erpnext/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('srdgame/auth-erpnext', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('erpnext', m(
            LogInButton,
            {
              className: 'Button LogInButton--erpnext',
              icon: 'erpnext',
              path: '/auth/erpnext' },
            app.translator.trans('srdgame-auth-erpnext.forum.log_in.with_erpnext_button')
          ));
        });
      });
    }
  };
});
