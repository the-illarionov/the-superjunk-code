<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
		$this->renderable(function (AccessDeniedHttpException $e, $request) {
			return response()->json([
				"type" => "authorization",
			], 403);
		});

		$this->renderable(function (AuthenticationException $e, $request) {
			return response()->json([
				"type" => "authentication",
			], 403);
		});

		$this->renderable(function (NotFoundHttpException $e, $request) {
			return response('', 404);
		});
		
        $this->reportable(function (Throwable $e) {
            //
        });
    }

	/*
	public function render($request, Throwable $exception) {
		
		
		return response()->json([
			"code" => \get_class($exception),
		], 500);
		
		
		return parent::render($request, $exception);
	}
	*/
}
