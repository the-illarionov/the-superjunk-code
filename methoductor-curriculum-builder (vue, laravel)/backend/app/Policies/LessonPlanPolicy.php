<?php

namespace App\Policies;

use App\Models\LessonPlan;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class LessonPlanPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        return Auth::check();
    }

    public function view(User $user, LessonPlan $lessonPlan)
    {
        return $user->id === $lessonPlan->user_id;
    }

    public function create(User $user)
    {
        return Auth::check();
    }

    public function update(User $user, LessonPlan $lessonPlan)
    {
        return $user->id === $lessonPlan->user_id;
    }

    public function delete(User $user, LessonPlan $lessonPlan)
    {
        return $user->id === $lessonPlan->user_id;
    }

    public function restore(User $user, LessonPlan $lessonPlan)
    {
        //
    }

    public function forceDelete(User $user, LessonPlan $lessonPlan)
    {
        //
    }
}
