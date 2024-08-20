import { Categoria } from "./categoria";

export class Produto {
    id: number;
    nome?: string;
    valor?:number;
    categoriaId:number;
    categoriaNome?:string;
    dataCadastro?:string;
    dataUltimaAtualizacao?:string;

     constructor( id:number, nome:string,valor:number, categoriaId:number , dataCadastro:string, dataUltimaAtualizacao:string){
        this.id=id
        this.nome=nome
        this.valor=valor
        this.categoriaId=categoriaId
        this.dataCadastro=dataCadastro
        this.dataUltimaAtualizacao=dataUltimaAtualizacao
    }
   
}