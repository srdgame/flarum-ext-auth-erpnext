import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('srdgame/auth-erpnext', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('erpnext',
      <LogInButton
        className="Button LogInButton--erpnext"
        icon="erpnext"
        path="/auth/erpnext">
        {app.translator.trans('srdgame-auth-erpnext.forum.log_in.with_erpnext_button')}
      </LogInButton>
    );
  });
});
