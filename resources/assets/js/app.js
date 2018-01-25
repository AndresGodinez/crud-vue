//var urlUsers = 'https://randomuser.me/api/?results=10';
// var urlUsers = 'https://jsonplaceholder.typicode.com/users';
new Vue({
	el:'#crud',
	created: function(){
		this.getKeeps();
	},
	data:{
		keeps: [],
		pagination:{
			'total': 0,
			'current_page'	: 0,
			'per_page'   	: 0,
			'last_page'  	: 0,
			'from'       	: 0,
			'to'         	: 0,
		},
		newKeep: '',
		fillKeep:{'id':'','keep':''},
		errors: [],
		offset: 4,
	},
	computed:{
		isActived: function(){
			return this.pagination.current_page;
		},
		pageNumber: function(){
			if(!this.pagination.to){
				return [];
			}
			var from = this.pagination.current_page - this.offset; 
			if(from < 1){
				from = 1;
			}
			var to = from + ( this.offset * 2 ); 
			if( to >= this.pagination.last_page){
				to = this.pagination.last_page;
			}
			var pagesArray = [];
			while(from <= to){
				pagesArray.push(from);
				from++;
			}
			return pagesArray;
		}
	},
	methods:{
		getKeeps: function(page){
			var urlKepps = 'tasks?page='+ page;
			axios.get(urlKepps).then(response =>{
				this.keeps = response.data.tasks.data,
				this.pagination = response.data.pagination
			});
		},
		editKeep: function(keep){
			this.fillKeep.id = keep.id;
			this.fillKeep.keep = keep.keep;
			$('#edit').modal('show');
		},
		updateKeep: function(id){
			var urlUpdate = 'tasks/' + id;
			axios.put(urlUpdate, this.fillKeep).then(
				response=>{
					this.getKeeps();
					this.fillKeep = {'id':'','keep':''};
					this.errors = [];
					$('#edit').modal('hide');
					toastr.success('Actualizado Correctamente');
				}).catch(error =>{
					this.errors = error.response
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
			},
			changePage: function(page){
				this.pagination.current_page = page;
				this.getKeeps(page);
			}
		}

	});