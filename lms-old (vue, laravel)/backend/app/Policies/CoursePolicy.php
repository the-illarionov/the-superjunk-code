<?php

namespace App\Policies;

use App\Models\Learning\Course;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CoursePolicy
{
    public function viewAny(User $user)
    {
        //
    }

    public function view(User $user, Course $course)
    {
        //
    }

    public function create(User $user)
    {
        //
    }

    public function update(User $user, Course $course)
    {
        //
    }

    public function delete(User $user, Course $course)
    {
        //
    }

    public function restore(User $user, Course $course)
    {
        //
    }

    public function forceDelete(User $user, Course $course)
    {
        //
    }



	// CUSTOM
	public function viewStudentCourses(User $user, User $givenUser)
    {
		return $user->id === $givenUser->id;
    }

	public function viewEditorCourses(User $user, User $givenUser)
    {
		return $user->id === $givenUser->id;
    }
}
