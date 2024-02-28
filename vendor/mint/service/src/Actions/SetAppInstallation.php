<?php

namespace Mint\Service\Actions;

use Closure;
use App\Helpers\SysHelper;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class SetAppInstallation
{
    public function handle($params, Closure $next)
    {
        SysHelper::setApp([
            'INSTALLED' => Str::random(10),
            'AC'        => Str::random(8),
            'EMAIL'     => Arr::get($params, 'registered_email'),
        ]);

        return $next($params);
    }
}
