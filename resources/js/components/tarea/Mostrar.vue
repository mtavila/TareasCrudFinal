<template>
    
    <div class="row">
        <div class="col-lg-12 col-mt-4">
             <router-link :to='{name:"crearTarea"}' class="btn btn-success"><i class="fas fa-plus-circle"></i></router-link>
        </div>

        <div class="col-lg-12 col-mt-4">
            <div class="table-responsive">
                <table class=" table table-bordered">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Contenido</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="tarea in tareas" :key="tarea.id">
                            <td>{{ tarea.id }}</td>
                            <td>{{ tarea.titulo }}</td>
                            <td>{{ tarea.contenido }}</td>
                            <td>
                                <!-- llamamos al componente para Editar     -->
                                <router-link :to='{name:"editarTarea",params:{id:tarea.id}}' class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                                <a type="button" @click="tareaEliminar(tarea.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name:"tareas",
        data(){
            return {
                tareas:[]
            }
        },
        mounted(){
        this.mostrarTareas()
    },
    methods:{
        async mostrarTareas(){
            await this.axios.get('/api/tarea').then(response=>{
                this.tareas = response.data
            }).catch(error=>{
                console.log(error)
                this.tareas = []
            })
        },
        tareaEliminar(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/tarea/${id}`).then(response=>{
                    this.mostrarTareas()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }

    }
</script>
