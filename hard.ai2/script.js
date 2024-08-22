// Definindo a classe Produto
class Produto {
    constructor(nome, vendedora, preco, categoria) {
        this.nome = nome;
        this.vendedora = vendedora;
        this.preco = preco;
        this.categoria = categoria;
    }

    criarCard() {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-category', this.categoria);

        const productInfo = `
            <div class="product-info">
                <h2 class="product-name">${this.nome}</h2>
                <p class="vendor-name">Vendedora: ${this.vendedora}</p>
                <p class="price">Preço: R$ ${this.preco.toFixed(2)}</p>
            </div>
        `;
        
        card.innerHTML = productInfo;
        return card;
    }
}

// Criando instâncias da classe Produto
const produtos = [
    new Produto("Teclado Mecânico", "Loja A", 150.00, 1),
    new Produto("Teclado Compacto", "Loja B", 120.00, 1),
    new Produto("Headset Gamer", "Loja C", 200.00, 1),
    new Produto("Mouse Óptico", "Loja D", 80.00, 2),
    new Produto("Mouse Gamer", "Loja E", 100.00, 2),
    new Produto("Hub USB", "Loja F", 40.00, 2),
    new Produto("Monitor Full HD", "Loja G", 600.00, 3),
    new Produto("Monitor Curvo", "Loja H", 800.00, 3),
    new Produto("Roteador Wi-Fi", "Loja I", 250.00, 4),
    new Produto("Repetidor Wi-Fi", "Loja J", 150.00, 4),
    new Produto("Impressora a Laser", "Loja K", 500.00, 5),
    new Produto("Impressora Multifuncional", "Loja L", 750.00, 5),
    new Produto("Webcam HD", "Loja M", 150.00, 7),
    new Produto("Câmera de Segurança", "Loja N", 300.00, 7),
    new Produto("Fone de Ouvido Bluetooth", "Loja O", 180.00, 6),
    new Produto("Fone de Ouvido com Fio", "Loja P", 60.00, 6)
];

// Adicionando os cards ao HTML
document.addEventListener('DOMContentLoaded', () => {
    const cardGrid = document.querySelector('.card-grid');

    produtos.forEach(produto => {
        cardGrid.appendChild(produto.criarCard());
    });

    const icons = document.querySelectorAll('.icon');
    const cards = document.querySelectorAll('.card');

    // Adicionar eventos aos ícones
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const categoria = icon.getAttribute('data-category');
            cards.forEach(card => {
                card.style.display = card.getAttribute('data-category') === categoria ? 'block' : 'none';
            });
        });
    });

    // Remover filtro
    document.querySelector('.remove-filter').addEventListener('click', () => {
        cards.forEach(card => {
            card.style.display = 'block';
        });
    });
});
