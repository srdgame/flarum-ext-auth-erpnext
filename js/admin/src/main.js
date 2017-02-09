import { extend } from 'flarum/extend';
import app from 'flarum/app';

import ERPNextSettingsModal from 'srdgame/auth-erpnext/components/ERPNextSettingsModal';

app.initializers.add('srdgame/auth-erpnext', app => {
  app.extensionSettings['srdgame-auth-erpnext'] = () => app.modal.show(new ERPNextSettingsModal());
});
