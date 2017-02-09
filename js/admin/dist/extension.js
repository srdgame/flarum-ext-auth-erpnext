'use strict';

System.register('srdgame/auth-erpnext/components/ERPNextSettingsModal', ['flarum/components/SettingsModal', 'flarum/app'], function (_export, _context) {
  "use strict";

  var SettingsModal, app, ERPNextSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }],
    execute: function () {
      ERPNextSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(ERPNextSettingsModal, _SettingsModal);

        function ERPNextSettingsModal() {
          babelHelpers.classCallCheck(this, ERPNextSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ERPNextSettingsModal).apply(this, arguments));
        }

        babelHelpers.createClass(ERPNextSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'ERPNextSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('srdgame-auth-erpnext.admin.erpnext_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('srdgame-auth-erpnext.admin.erpnext_settings.client_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('srdgame-auth-erpnext.app_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('srdgame-auth-erpnext.admin.erpnext_settings.client_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('srdgame-auth-erpnext.app_secret') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('srdgame-auth-erpnext.admin.erpnext_settings.hosted_domain_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('srdgame-auth-erpnext.app_domain') })
            )];
          }
        }]);
        return ERPNextSettingsModal;
      }(SettingsModal);

      _export('default', ERPNextSettingsModal);
    }
  };
});;
'use strict';

System.register('srdgame/auth-erpnext/main', ['flarum/extend', 'flarum/app', 'srdgame/auth-erpnext/components/ERPNextSettingsModal'], function (_export, _context) {
  "use strict";

  var extend, app, ERPNextSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_johnhearfieldAuthERPNextComponentsERPNextSettingsModal) {
      ERPNextSettingsModal = _johnhearfieldAuthERPNextComponentsERPNextSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('srdgame/auth-erpnext', function (app) {
        app.extensionSettings['srdgame-auth-erpnext'] = function () {
          return app.modal.show(new ERPNextSettingsModal());
        };
      });
    }
  };
});
