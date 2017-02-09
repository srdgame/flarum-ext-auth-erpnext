<?php

namespace Srdgame\Auth\ERPNext;

use Flarum\Forum\AuthenticationResponseFactory;
use Flarum\Forum\Controller\AbstractOAuth2Controller;
use Flarum\Settings\SettingsRepositoryInterface;
use League\OAuth2\Client\Provider\GenericProvider;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class ERPNextAuthController extends AbstractOAuth2Controller
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

	public function getERPNextDomain()
	{
		return $this->settings->get('srdgame-auth-erpnext.app_domain');
	}

	public function getERPNextApiDomain()
	{
		return $this->getERPNextDomain().'/api/method';
	}

	public function getAuthorizeUrl()
	{
		return $this->getERPNextApiDomain().'/frappe.integration_broker.oauth2.authorize';
	}
	public function getAccessTokenUrl()
	{
			return $this->getERPNextApiDomain().'/frappe.integration_broker.oauth2.get_token';
	}
	public function getResourceOwnerDetailsUrl()
	{
		return $this->getERPNextApiDomain().'/frappe.auth.get_logged_user';
	}


    /**
     * @param AuthenticationResponseFactory $authResponse
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(AuthenticationResponseFactory $authResponse, SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
        $this->authResponse = $authResponse;
    }

    /**
     * {@inheritdoc}
     */
    protected function getProvider($redirectUri)
    {
        return new ERPNext([
            'clientId'        => $this->settings->get('srdgame-auth-erpnext.app_id'),
            'clientSecret'    => $this->settings->get('srdgame-auth-erpnext.app_secret'),
            'redirectUri'     => $redirectUri,
            'approvalPrompt'  => 'force',
            'hostedDomain'    => $this->settings->get('srdgame-auth-erpnext.app_domain'),
            'accessType'      => 'offline',
			'urlAuthorize'    => $this->getAuthorizeUrl(),
			'urlAccessToken'  => $this->getAccessTokenUrl(),
			'urlResourceOwnerDetails' => $this->getResourceOwnerDetailsUrl(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    protected function getAuthorizationUrlOptions()
    {
        return ['scope' => ['user:email']];
	}

    /**
     * {@inheritdoc}
     */
    protected function getIdentification(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'email' => $resourceOwner->getEmail() ?: $this->getEmailFromApi()
        ];
    }

    /**
     * {@inheritdoc}
     */
    protected function getSuggestions(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'username' => $resourceOwner->getFirstName()
        ];
    }

    protected function getEmailFromApi()
    {
        $url = $this->getERPNextApiDomain().'/user/emails';

        $emails = $this->provider->getResponse(
            $this->provider->getAuthenticatedRequest('GET', $url, $this->token)
        );

        foreach ($emails as $email) {
            if ($email['primary'] && $email['verified']) {
                return $email['email'];
            }
        }
    }
}
