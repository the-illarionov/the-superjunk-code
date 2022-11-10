<?php

namespace App\Policies;

use App\Models\Learning\Lesson;
use App\Models\Roles\StudentOfLesson;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StudentOfLessonPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Roles\StudentOfLesson  $studentOfLesson
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, StudentOfLesson $studentOfLesson)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user, User $givenUser)
    {
        return $user->id === $givenUser->id;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Roles\StudentOfLesson  $studentOfLesson
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, StudentOfLesson $studentOfLesson, User $givenUser, Lesson $lesson)
    {
        return $user->id === $givenUser->id && $studentOfLesson->student_id === $givenUser->id && $givenUser->can('view', $lesson);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Roles\StudentOfLesson  $studentOfLesson
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, StudentOfLesson $studentOfLesson)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Roles\StudentOfLesson  $studentOfLesson
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, StudentOfLesson $studentOfLesson)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Roles\StudentOfLesson  $studentOfLesson
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, StudentOfLesson $studentOfLesson)
    {
        //
    }
}
