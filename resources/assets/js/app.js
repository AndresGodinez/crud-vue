//var urlUsers = 'https://randomuser.me/api/?results=10';
// var urlUsers = 'https://jsonplaceholder.typicode.com/users';
new Vue({
	el:'#crud',
	created: function(){
		this.getKeeps();
	},
	data:{
		keeps: []
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
		}
	}
	
});