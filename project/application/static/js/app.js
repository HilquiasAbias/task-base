// Aplicação Vue
const app = Vue.createApp({
    data() {
        return {
            sidebarExpanded: false,
            modalOpen: false,
            modalTitle: '',
            activeTab: 0,
            menuItems: ['Dashboard', 'Usuários', 'Produtos', 'Vendas', 'Relatórios', 'Configurações'],
            searchItems: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' },
                { id: 4, name: 'Item 4' },
                { id: 5, name: 'Item 5' },
            ],
            tabs: ['Lista 1', 'Lista 2', 'Lista 3', 'Lista 4'],
            list1: [
                { id: 1, name: 'Item 1', description: 'Descrição do item 1' },
                { id: 2, name: 'Item 2', description: 'Descrição do item 2' },
                { id: 3, name: 'Item 3', description: 'Descrição do item 3' }
            ],
            list2: [
                { id: 1, name: 'Item 1', value: 100 },
                { id: 2, name: 'Item 2', value: 200 },
                { id: 3, name: 'Item 3', value: 300 }
            ],
            list3: [
                { id: 1, name: 'Item 1', status: 'Ativo' },
                { id: 2, name: 'Item 2', status: 'Inativo' },
                { id: 3, name: 'Item 3', status: 'Pendente' }
            ],
            list4: [
                { id: 1, name: 'Item 1', date: '2023-01-01' },
                { id: 2, name: 'Item 2', date: '2023-02-15' },
                { id: 3, name: 'Item 3', date: '2023-03-30' }
            ]
        };
    },
    mounted() {
        // Inicializa o Select2
        try {
            $('.search-select').select2({
                placeholder: 'Pesquisar...',
                allowClear: true
            });
        } catch (e) {
            console.error("Erro ao inicializar Select2:", e);
        }
    },
    methods: {
        openModalWithContent(title) {
            this.modalTitle = title;
            this.modalOpen = true;
            this.sidebarExpanded = true;
        },
        toggleSidebarModal() {
            this.modalOpen = !this.modalOpen;
            if (!this.modalOpen) {
                this.sidebarExpanded = false;
            }
        },
        setActiveTab(index) {
            this.activeTab = index;
        }
    }
});

// Iniciar o app Vue após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    try {
        app.mount('#app');
        console.log('Vue app mounted successfully');
    } catch (e) {
        console.error('Error mounting Vue app:', e);
    }
});