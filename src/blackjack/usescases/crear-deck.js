import _ from 'underscore';



/**
 *  Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCarta  ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales ['A','J','Q','K'];
 * @returns {array} retorna nuevo deck
 */
export const crearDeck = (tiposDeCarta,tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length===0 ) throw new Error ('TiposDeCarta es obligatorio');
    if (!tiposEspeciales || tiposEspeciales.length===0 ) throw new Error ('TiposEspeciales es obligatorio');
  
    let deck=[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}
