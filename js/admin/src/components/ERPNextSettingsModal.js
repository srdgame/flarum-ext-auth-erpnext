import SettingsModal from 'flarum/components/SettingsModal';
import app from 'flarum/app';

export default class ERPNextSettingsModal extends SettingsModal {
  className() {
    return 'ERPNextSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('srdgame-auth-erpnext.admin.erpnext_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('srdgame-auth-erpnext.admin.erpnext_settings.client_id_label')}</label>
        <input className="FormControl" bidi={this.setting('srdgame-auth-erpnext.app_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('srdgame-auth-erpnext.admin.erpnext_settings.client_secret_label')}</label>
        <input className="FormControl" bidi={this.setting('srdgame-auth-erpnext.app_secret')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('srdgame-auth-erpnext.admin.erpnext_settings.hosted_domain_label')}</label>
        <input className="FormControl" bidi={this.setting('srdgame-auth-erpnext.app_domain')}/>
      </div>
    ];
  }
}
