document.addEventListener('DOMContentLoaded', () => {

    const dropdowns = document.querySelectorAll('.expandir');
    const menu = document.querySelector('.menu');
    const opcoes = document.querySelector('.opcoes');

    function fecharTodos() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('ativo');
        });
    }

    dropdowns.forEach(dropdown => {

        const botao = dropdown.querySelector('.opcao');
        const balao = dropdown.querySelector('.balao');

        if (!botao || !balao) return;

        botao.addEventListener('click', (e) => {

            e.preventDefault();
            e.stopPropagation();

            const estaAberto = dropdown.classList.contains('ativo');

            fecharTodos();

            if (!estaAberto) {
                dropdown.classList.add('ativo');
            }
        });
    });

    // Menu Mobile
    if (menu && opcoes) {

        menu.addEventListener('click', (e) => {

            e.stopPropagation();

            menu.classList.toggle('ativo');
            opcoes.classList.toggle('ativo');
        });
    }

    document.addEventListener('click', (e) => {

        const clicouNoDropdown = e.target.closest('.expandir');
        const clicouNoMenu = e.target.closest('.menu');

        if (!clicouNoDropdown) {
            fecharTodos();
        }

        if (!clicouNoMenu && !e.target.closest('.opcoes')) {
            menu?.classList.remove('ativo');
            opcoes?.classList.remove('ativo');
        }
    });

});