import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova Funcao');
    }
});

$('body').novaFuncao();