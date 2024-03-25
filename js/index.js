const $ = document.querySelector.bind(document)
const $all = document.querySelectorAll.bind(document)

const DirectStandard = $('#clienteStandard')
const DirectPlatinum = $('#clientePlatinum')
const DirectGold = $('#clienteGold')

DirectStandard.checked = false
DirectPlatinum.checked = false
DirectGold.checked = false

const clienteInput = document.getElementById('tipo-cliente')
let taxa;
clienteInput.oninput = () => {
        const taxaJuros = clienteInput.value
        switch (taxaJuros) {
            case '#clienteStandard':
                taxa = 2.5
                break;
        
            case '#clientePlatinum':
                taxa = 1.99
                break;
            default:
                break;
        }
        taxa = taxaJuros
}

//Standard = 2.5%
//Platinum = 1.99%
//Gold = 1.2%

const parcelasInput = document.getElementById( 'parcelas' )
let parcelas;
parcelasInput.oninput = () => {
    const parcelamento = Number(parcelasInput.value)
    parcelas = parcelamento
}

const capitalInput = document.getElementById('valor-emprestado')
const montanteSpan = document.getElementById('montante')

capitalInput.oninput = () => {
    const value = capitalInput.value
    let montanteResult = ''

    if(value) {
        /**
         * A função Number converte uma string para número,
         * desde que o valor da string expresse um valor numérico.
         * Caso contrário, a função Number retornará o valor NaN
         */
        const capital = Number(value)
        const montante = capital * (1 +((2 / 100) * parcelas))
        const parcelando = montante / parcelas
        montanteResult = `
        O montante de é: ${montante}.
        O valor parcelado é: ${parcelando}.
        `
    }

    montanteSpan.innerText = montanteResult
}