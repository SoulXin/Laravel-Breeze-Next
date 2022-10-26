<?php

namespace App\Http\Controllers\Customers;

use App\Http\Controllers\Controller;
use App\Models\Customers;
use Exception;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class CustomersController extends Controller
{
    public function index()
    {
        $customers = DataTables::of(Customers::all())->make();
        return $customers;
    }

    public function detail(Request $request, Customers $customers){
        $this->response->data = $customers;
        return $this->json();
    }

    public function update(Request $request, Customers $customers){
        $this->validate($request, [
            'name' => 'required|nullable',
            'address' => 'required',
            'phone' => 'required|numeric',
            'city' => 'required',
            'pos_code' => 'required|numeric',
        ]);

        try {
            $customers->fill($request->all());
            $customers->save();
        } catch (Exception $error) {
			$this->code = 500;
			$this->response->message = $error->getMessage();
        }

        $this->response->message = "Success";
        return $this->json();
    }

    public function store(Request $request){
        $this->validate($request, [
            'name' => 'required|unique:customers',
            'address' => 'required',
            'phone' => 'required|numeric',
            'city' => 'required',
            'pos_code' => 'required|numeric',
        ]);

        try {
            $customer = new Customers($request->all());
            $customer->save();
        } catch (Exception $error) {
			$this->code = 500;
			$this->response->message = $error->getMessage();
        }

        $this->response->message = "Success";
        return $this->json();
    }

    public function delete(Request $request, Customers $customers){
        try{
            $customers->delete();
        } catch (Exception $error){
            $this->code = 500;
			$this->response->message = $error->getMessage();
        }
        
        $this->response->message = "Success";
        return $this->json();
    }
}
