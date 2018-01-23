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
		errors: [],
	},
	methods:{
		getKeeps: function(){
			var urlKepps = 'tasks';
			axios.get(urlKepps).then(response =>{
				this.keeps = response.data
			});
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