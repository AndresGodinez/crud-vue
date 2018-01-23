<form method="POST" v-on:submit.prevent="createKeep">
<div class="modal fade" id="create">
	<div class="modal-dialog">
		<div class="modal-content">
			<dir class="modal-header">
				<button type="button" class="close" data-dismiss='modal'>
					&times;
				</button>
				<h4>Nueva tarea</h4>
			</dir>
			<dir class="modal-body">
				<label for="keep">Crear nueva tarea</label>				
				<input type="text" name="keep" class="form-control" v-model="newKeep">
				<span v-for="error in errors" class="text-danger">
					@{{error}}
				</span>
			</dir>
			<dir class="modal-footer">
				<input type="submit" class="btn btn-primary" value="Guardar">
			</dir>
		</div>
	</div>
</div>
</form>