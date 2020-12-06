import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar.config';
import { Inject, Injectable, Injector } from "@angular/core";
import { HttpClient } from '@angular/common/http';

export function BarFactory(http: HttpClient, injector: Injector){
    return new BarServices(http, injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable()
export class BarServices {
    constructor(private http: HttpClient, @Inject(BAR_UNIDADE_CONFIG) private config: BarUnidadeConfig){}
    public obterUnidade(): string{
        return 'Unidade ID: ' + this.config.unidadeId + ' Token: ' + this.config.unidadeToken;
    }
    obterBebidas(): string {
        return 'Bebidas';
    }

    obterPorcoes(): string{
        return 'Porções';
    }

    obterRefeicoes(): string {
        return 'Refeições';
    }
}
export class BarServicesMock {
    
    obterBebidas(): string {
        return 'Mock Bebidas';
    }

    obterPorcoes(): string{
        return 'Mock Porções';
    }

    obterRefeicoes(): string {
        return 'Mock Refeições';
    }
}

export abstract class BebidaService {
    obterBebidas: () => string
}