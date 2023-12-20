export default class Moeda{
    static formatarMoeda(valor: number){
        return new Intl.NumberFormat(
        'pt-BT', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor)        
    }

}