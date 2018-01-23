//var urlUsers = 'https://randomuser.me/api/?results=10';
// var urlUsers = 'https://jsonplaceholder.typicode.com/users';
new Vue({
	el:'#crud',
	created: function(){
		this.getKeeps();
	},
	data:{
		keeps: [],
		newKeep: '',
		fillKeep:{'id':'','keep':''},
		errors: [],
	},
	methods:{
		getKeeps: function(){
			var urlKepps = 'tasks';
			axios.get(urlKepps).then(response =>{
				this.keeps = response.data
			});
		},
		editKeep: function(keep){
			this.fillKeep.id = keep.id;
			this.fillKeep.keep = keep.keep;
			$('#edit').modal('show');
		},
		updateKeep: function(id){
			alert('edición');
		},
		deleteKeep: function (keep){
			var urlDelete = 'tasks/' + keep.id;
			axios.delete(urlDelete).then(response =>{
				this.getKeeps();
				toastr.success('Eliminado correctamente');
			});
		},
		createKeep: function(){
			var urlCreate = 'tasks';
			axios.post(urlCreate, {
				keep: this.newKeep
			}).then(response=> {
				this.getKeeps();
				this.newKeep='';
				this.errors=[];
				$('#create').modal('hide');
				toastr.success('Nueva tarea añadida');
			}).catch(error =>{
				this.errors= error.response.data
			});
		}
	}
	
});