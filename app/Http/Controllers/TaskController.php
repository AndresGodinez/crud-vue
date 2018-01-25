<?php

namespace App\Http\Controllers;
use Carbon\Carbon;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $date = Carbon::now();
        $tasks = Task::orderBy('id','DESC')->paginate(15);

        return [
            'pagination' => [
                'total'          => $tasks->total(),
                'current_page'   => $tasks->currentPage(),
                'per_page'       => $tasks->perPage(),
                'last_page'      => $tasks->lastPage(),
                'from'           => $tasks->firstItem(),
                'to'             => $tasks->lastItem()
            ],
            'tasks' => $tasks,
            'date' => $date,
        ];
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'keep' => 'required',
        ]);
        Task::create($request->all());
    }





    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        $this->validate($request, ['keep'=>'required']);
        $task->update($request->all());
        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        $task->delete();
    }
}
