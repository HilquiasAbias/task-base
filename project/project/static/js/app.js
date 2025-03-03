// // Componente Sidebar
// const SidebarComponent = {
//     template: '#sidebar-template',
//     data() {
//         return {
//             modalOpen: false,
//             menuItems: ['Dashboard', 'Usuários', 'Produtos', 'Vendas', 'Relatórios', 'Configurações'],
//             searchItems: [
//                 { id: 1, name: 'Item 1' },
//                 { id: 2, name: 'Item 2' },
//                 { id: 3, name: 'Item 3' },
//                 { id: 4, name: 'Item 4' },
//                 { id: 5, name: 'Item 5' },
//             ]
//         };
//     },
//     mounted() {
//         // Inicializa o Select2
//         $(this.$el).find('.search-select').select2({
//             placeholder: 'Pesquisar...',
//             allowClear: true
//         });
//     },
//     methods: {
//         toggleSidebarModal() {
//             this.modalOpen = !this.modalOpen;
//             this.$root.toggleSidebar();
//         }
//     }
// };

// // Componente Content
// const ContentComponent = {
//     template: '#content-template',
//     data() {
//         return {
//             activeTab: 0,
//             tabs: ['Lista 1', 'Lista 2', 'Lista 3', 'Lista 4'],
//             list1: [
//                 { id: 1, name: 'Item 1', description: 'Descrição do item 1' },
//                 { id: 2, name: 'Item 2', description: 'Descrição do item 2' },
//                 { id: 3, name: 'Item 3', description: 'Descrição do item 3' }
//             ],
//             list2: [
//                 { id: 1, name: 'Item 1', value: 100 },
//                 { id: 2, name: 'Item 2', value: 200 },
//                 { id: 3, name: 'Item 3', value: 300 }
//             ],
//             list3: [
//                 { id: 1, name: 'Item 1', status: 'Ativo' },
//                 { id: 2, name: 'Item 2', status: 'Inativo' },
//                 { id: 3, name: 'Item 3', status: 'Pendente' }
//             ],
//             list4: [
//                 { id: 1, name: 'Item 1', date: '2023-01-01' },
//                 { id: 2, name: 'Item 2', date: '2023-02-15' },
//                 { id: 3, name: 'Item 3', date: '2023-03-30' }
//             ]
//         };
//     },
//     methods: {
//         setActiveTab(index) {
//             this.activeTab = index;
//         }
//     }
// };

// // Aplicação Vue
// const app = Vue.createApp({
//     delimiters: ['${', '}'],
//     components: {
//         'sidebar-component': SidebarComponent,
//         'content-component': ContentComponent
//     },
//     data() {
//         return {
//             sidebarExpanded: false
//         };
//     },
//     methods: {
//         toggleSidebar() {
//             this.sidebarExpanded = !this.sidebarExpanded;
//         }
//     }
// });

// app.mount('#app');

const { createApp } = Vue;

// Sidebar Component
const Sidebar = {
    props: ['isExpanded'],
    template: `
        <div class="sidebar" :class="{ 'expanded': isExpanded }">
            <button @click="$emit('toggle-sidebar')" class="btn btn-primary m-2">
                {{ isExpanded ? '◀' : '▶' }}
            </button>
            <div v-if="isExpanded" class="sidebar-modal">
                <!-- Conteúdo do modal aqui -->
            </div>
        </div>
    `
};

// Content Component
const Content = {
    props: ['isSidebarExpanded', 'activeTab', 'lists'],
    template: `
        <div class="content" :style="{ marginLeft: isSidebarExpanded ? '300px' : '100px' }">
            <div class="topbar d-flex gap-2 p-2 bg-light">
                <button v-for="(_, index) in lists" 
                        @click="$emit('set-active-tab', index)"
                        :class="{ 'active': activeTab === index }"
                        class="btn btn-outline-primary">
                    Tab {{ index + 1 }}
                </button>
            </div>
            <div class="p-3">
                <ul v-for="(list, index) in lists" v-if="activeTab === index">
                    <li v-for="item in list">{{ item }}</li>
                </ul>
            </div>
        </div>
    `
};

// Vue App
const app = createApp({
    data() {
        return {
            isSidebarExpanded: false,
            activeTab: 0,
            lists: [
                ['Item 1-1', 'Item 1-2', 'Item 1-3'],
                ['Item 2-1', 'Item 2-2'],
                ['Item 3-1', 'Item 3-2', 'Item 3-3'],
                ['Item 4-1']
            ]
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarExpanded = !this.isSidebarExpanded;
        }
    },
    components: { Sidebar, Content }
});

app.mount('#app');