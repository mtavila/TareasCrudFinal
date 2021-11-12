// const Home = () => import('./components/Home.vue');
// const Contacto = () => import('./components/Contacto.vue');

// const Mostrar = ()=> import('./components/tarea/Mostrar.vue');
// const Crear = ()=> import('./components/tarea/Crear.vue');
// const Editar = ()=> import('./components/tarea/Editar.vue');

export const routes = [
    {
        name : 'home',
        path: '/',
        components: require('./components/Home.vue')
    },
    {
        name : 'contacto',
        path: '/contacto',
        components: require('./components/Contacto.vue')
    },
    {
        name : 'mostrarTareas',
        path: '/tareas',
        components: require('./components/tarea/Mostrar.vue')
    },
    {
        name : 'crearTarea',
        path: '/crear',
        components: require('./components/tarea/Crear.vue')
    },
    {
        name : 'editarTarea',
        path: '/editar/:idtarea',
        components: require('./components/tarea/Editar.vue')
    },
];

