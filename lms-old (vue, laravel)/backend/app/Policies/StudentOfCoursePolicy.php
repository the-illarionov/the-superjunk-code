<?php

namespace App\Policies;

use App\Models\Roles\StudentOfCourse;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StudentOfCoursePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user, User $givenUser)
    {
        return $user->id === $givenUser->id;
    }

    public function view(User $user, User $givenUser)
    {
        return $user->id === $givenUser->id;
    }

    public function create(User $user, User $givenUser)
    {
        return $user->id === $givenUser->id;
    }

    public function update(User $user, StudentOfCourse $studentOfCourse)
    {
        //
    }

    public function delete(User $user, StudentOfCourse $studentOfCourse)
    {
        //
    }

    public function restore(User $user, StudentOfCourse $studentOfCourse)
    {
        //
    }
	
    public function forceDelete(User $user, StudentOfCourse $studentOfCourse)
    {
        //
    }
}
