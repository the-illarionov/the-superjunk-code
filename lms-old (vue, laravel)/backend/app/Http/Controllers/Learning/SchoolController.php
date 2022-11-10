<?php

namespace App\Http\Controllers\Learning;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Models\Learning\School;
use App\Http\Resources\Learning\SchoolResource;
use App\Http\Resources\Learning\SchoolCollection;

class SchoolController extends Controller
{
	public function __construct() {
        $this->middleware('auth:sanctum')->only(['update']);
    }

    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Request $request, School $school)
    {
        $school->checkExistenceOnLocale($request->locale);

		return new SchoolResource($school);
    }

    public function update(Request $request, School $school)
    {
		$this->authorize("update", $school);

		$request->validate([
            'name' => 'string|max:50|min:3',
            'url' => 'string|max:50|min:3|unique:schools'
        ]);

		if($request->has('url') && $request->url !== $school->url) {
			$school->url = Str::slug($request->url);
		}

		$school->save();

        return new SchoolResource($school);
    }
	
    public function destroy(School $school)
    {
        //
    }



	// CUSTOM
	public function getName(Request $request, School $school)
    {
		$school->checkExistenceOnLocale($request->locale);

		return $school->{'name_'.$request->locale};
    }
}
