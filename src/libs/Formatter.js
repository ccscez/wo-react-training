import accounting from 'accounting';

export default class Formatter {
    static money(val) {
        return accounting.formatMoney(val, {symbol: 'NOK', format: '%v %s', decimal: ',', thousand: '.'});
    }
}
