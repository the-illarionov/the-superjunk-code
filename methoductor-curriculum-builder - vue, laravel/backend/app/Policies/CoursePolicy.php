<?php

namespace App\Policies;

use App\Models\Course;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class CoursePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        return Auth::check();
    }

    public function view(User $user, Course $course)
    {
        return $user->id === $course->user_id;
    }

    public function create(User $user)
    {
        return Auth::check();
    }

    public function update(User $user, Course $course)
    {
        return $user->id === $course->user_id;
    }

    public function delete(User $user, Course $course)
    {
        return $user->id === $course->user_id;
    }

    public function restore(User $user, Course $course)
    {
        //
    }

    public function forceDelete(User $user, Course $course)
    {
        //
    }
}
