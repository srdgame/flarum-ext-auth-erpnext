<?php

use Srdgame\Auth\ERPNext\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);
    $events->subscribe(Listener\AddERPNextAuthRoute::class);
};
