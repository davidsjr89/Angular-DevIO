import { Produto } from './../../reactiveForms/cadastro/models/produto';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'produto-count',
    template: 
    `
    <div>
        <h3>Produts</h3>
        <div>
            Produtos Ativos: {{this.contadorAtivos()}} no total de {{produtos.length}} produtos <br><br>
        </div>
    </div>
    `
})

export class ProdutoCountComponent {
    @Input() produtos: Produto[];

    contadorAtivos(): number{
        if(!this.produtos) return;
        return this.produtos.filter((produto: Produto) => produto.ativo).length;
    }
}