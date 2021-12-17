import Cadastro from '@/views/cadastro/Cadastro.vue';
import Home from '@/views/home/Home.vue';


export const routes = [
    { path: '', component: Home, titulo: 'Home' },
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' }
];