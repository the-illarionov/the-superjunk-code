<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
		$user = auth()->guard('sanctum')->user();

		$isOwner = false;

		if($user && $request->routeIs('users.show')) {
			$isOwner = $this->id === $user->id;
		}

        return [
            "email" => $this->email,
            "name" => $this->name,
            "nickname" => $this->nickname,
			"isOwner" => $this->when($isOwner, true),
        ];
    }
}
