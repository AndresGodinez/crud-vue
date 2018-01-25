@extends('app')
@section('content')
<div class="row">
	<div class="col-xs-12">
		<h1 class="page-header">
			Crud vue
		</h1>
	</div>
</div>
<div id="crud" class="row">		
	<div class="col-sm-7">
		<a href="#" class="pull-right btn btn-primary" data-toggle="modal" data-target="#create">
			Crear nueva tarea
		</a>
		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th width="10px">id</th>
					<th>Tarea</th>
					<th>Creado</th>
					<th>Modificado</th>
					<th colspan="2"> Acciones</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="keep in keeps">
					<td>@{{keep.id}}</td>
					<td>@{{keep.keep}}</td>
					<td>@{{keep.created_at}}</td>
					<td>@{{keep.updated_at}}</td>
					<td>
						<a href="#" class="btn btn-warning" v-on:click="editKeep(keep)">Actualizar</a>
					</td>
					<td>
						<a href="#" class="btn btn-danger" v-on:click="deleteKeep(keep)">Eliminar</a>
					</td>
				</tr>
			</tbody>
		</table>
		<nav>
			<ul class="pagination">
				<li v-if="pagination.current_page >1">
					<a href="#" @click.prevent="changePage(pagination.current_page - 1 )">
						<span>Atrás</span>
					</a>
				</li>
				<li v-for="page in pageNumber" v-bind:class="[ page == isActived ? 'active' : '']">
					<a href="#" @click.prevent= "changePage(page)">
						@{{page}}
					</a>
				</li>
				<li v-if="pagination.current_page < pagination.last_page">
					<a href="#" @click.prevent="changePage(pagination.current_page + 1 )">
						<span>Siguiente</span>
					</a>
				</li>
			</ul>
		</nav>
		@include('create')
		@include('edit')
	</div>
	<div class="col-sm-5">
		@{{$data}}
	</div>
</div>
@endsection