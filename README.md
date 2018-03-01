# Flarum ERPNext Authenticator
Allows users to login using their ERPNext Account.

## Installation
To install, use composer:
```
composer require srdgame/flarum-ext-auth-erpnext
```
## Usage
* Install extension via Composer / Packagist
* Enable extension in the admin/extensions of Flarum
* Fill in the settings field for the extension


## Setup instructions for ERPNext ##
1. Go to your frappe desk form
2. Create a oauth client and give it a name (eg My Flarum)
3. Redirects URIs: http://<flarum_domain>:<port>/auth/erpnext
4. Default Redirect URI: http://<flarum_domain>:<port>/auth/erpnext

----------
