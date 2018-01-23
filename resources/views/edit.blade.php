<form method="POST" v-on:submit.prevent="updateKeep(fillKeep.id)">
<div class="modal fade" id="edit">
	<div class="modal-dialog">
		<div class="modal-content">
			<dir class="modal-header">
				<button type="button" class="close" data-dismiss='modal'>
					&times;
				</button>
				<h4>Editar</h4>
			</dir>
			<dir class="modal-body">
				<label for="keep">Actualizar tarea</label>				
				<input type="text" name="keep" class="form-control" v-model="fillKeep.keep">
				<span v-for="error in errors" class="text-danger">
					@{{error}}
				</span>
			</dir>
			<dir class="modal-footer">
				<input type="submit" class="btn btn-primary" value="Actualizar">
			</dir>
		</div>
	</div>
</div>
</form>