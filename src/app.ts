
const container: HTMLElement | any = document.getElementById("app")

var operand1 : number = 0
var operand2 : number | null = null
var operator : iOperator | null = null

updateDisplay()

function updateDisplay(){
    container.innerHTML = operand1.toString() + ' '+(operator == null ? '' : operator.symbol)+' '+(operand2 == null ?  '' : operand2)
}

function onNbrClick(value: number){
    if( operator == undefined ){
        operand1 = (operand1 * 10) + value
    }
    else{
        operand2 = ((operand2 ? operand2 : 0 )* 10) + value
    }
    updateDisplay()
}

function onOperatorClick(op : iOperator){
    if (!operator){
    operator = op
    updateDisplay()
    }
}

function onClearClick(){
    operand1 = 0
    operand2 = null
    operator = null
    updateDisplay()
}

function onEqualClick(){
    if(operand2 != null && operator != null){
        operand1 = operator.operate(operand1,operand2)
        operand2 = null
        operator = null
        updateDisplay()
    }
}


interface iOperator {
    symbol : string
    operate(operand1: number, operand2: number): number
}

class multiply implements iOperator{
    symbol : string = 'x'

    operate(operand1: number, operand2: number): number {
        return operand1 * operand2
    }
}

class divide implements iOperator{
    symbol : string = '/'

    operate(operand1: number, operand2: number): number {
        return operand1 / operand2
    }
}

class add implements iOperator{
    symbol : string = '+'

    operate(operand1: number, operand2: number): number {
        return operand1 + operand2
    }
}

class subtract implements iOperator{
    symbol : string = '-'

    operate(operand1: number, operand2: number): number {
        return operand1 - operand2
    }
}
