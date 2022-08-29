Vue.createApp({
    data() {
        return {
            title: 'Todo List In Vue',
            todolist: [
                {
                    description: 'Learn AWS',
                    checking: true
                },
                {
                    description: 'pay udemy crash course',
                    checking: false
                },
                {
                    description: 'study vue',
                    checking: true
                }
            ],
            newTask: '', //new task description
            editTask: null, // null significa que no hay tareas para editar
        }
    },
    methods: {
        addTask() {
            if(this.editTask != null){ //si hay tarea para editar
                this.todolist[this.editTask].description = this.newTask; //actualizamos la tarea
                this.editTask = null; //despues de actualizar la tarea, la variable editTask se pone a null
            }else{
                this.todolist.push({ //si no hay tarea para editar, se agrega una nueva tarea
                    description: this.newTask, //se le asigna la descripcion de la tarea
                    checking: false //se le asigna el valor false para que no se muestre la tarea como completada al momento de agregarla a la lista de tareas
                });
            }
            this.newTask = ''; //se limpia el campo de texto de la tarea
        },
        /* con el deletingTask se elimina una tarea */
        deletingTask(index) {
            this.todolist.splice(index, 1);
        },
        /*  con el editActualTask se puede editar una tarea ya creada */
        editActualTask(index){
            this.newTask = this.todolist[index].description; /* aqui agarra la descripcion segun el index que queramos y la pone como new Task */
            this.editTask = index; /* aqui se guarda el index de la tarea que se va a editar */
        }

    },
    computed:{
        checkTasks(){
            return this.todolist.filter(t => t.checking === true).length; //se filtra la lista de tareas para que solo se muestren las tareas completadas
        },
        uncheckTasks(){
            return this.todolist.filter(t => t.checking === false).length; //se filtra la lista de tareas para que solo se muestren las tareas no completadas
        }
    }
}).mount('#app') //se mantiene el id de la etiqueta en el html para que se muestre en el navegador web 