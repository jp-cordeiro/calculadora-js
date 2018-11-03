class CalController{
    constructor(){

        this._locale = "pt-BR"

        this._operation = []
        this._currentIndex = 0

        this._displayCalc = document.querySelector("#display")
        this._date = document.querySelector("#data")
        this._time = document.querySelector("#hora")
        this._currentDate;

        this.initialize();
        this.ininiButtonsEvents();
    }

    initialize(){
        this.setDusplayDateTime();

        setInterval(() => {
            this.setDusplayDateTime();
        },1000)
    }

    ininiButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((button,index) => {
            this.addEventListenerAll(button,[
                'click',
                'drag'
            ],e => {
                let textButton = button.className.baseVal.replace('btn-','');

                this.actions(textButton)
            })

            this.addEventListenerAll(button,[
                'mouseover',
                'mousedown',
                'mouseup'
            ], e => {
                button.style.cursor = 'pointer';
            })
        })
    }

    actions(value){
        let number = parseInt(value)
        let isNumber = Number.isInteger(number)

        if(isNumber){
            this.addOperation(number)
        }else if(this._operation.length > 0){
            this.selectOperation(value)
        }

        console.log(this._operation)
        console.log(this._currentIndex)
    }

    selectOperation(value){
        let operation

        switch (value){
            case 'ac':
                this.clearAll()
                break;
            case 'ce':
                this.cancelEntry()
                break;
            case 'soma':
                operation = '+'
                this.soma()
                break;
            case 'subtracao':
                this.subtracao()
                break;
            case 'multiplicacao':
                this.multiplicacao()
                break;
            case 'divisao':
                this.divisao()
                break;
            case 'igual':
                this.igual()
                break;
            case 'porcento':
                this.porcento()
                break;
            default:
                this.setError()
                break;

        }
        if(value != 'ac' &&
            value != 'ce' &&
            !isNaN(this._operation[this._currentIndex])){
            this._operation[this._currentIndex + 1] = operation

            this._currentIndex += 2
        }
    }

    clearAll(){
        this._operation = []
        this._currentIndex = 0
    }

    cancelEntry(){
        this._operation.pop()
        if((Number.isInteger(this._operation[this._currentIndex]) && this._currentIndex > 1) || this._currentIndex != 0){
            this._currentIndex = this._currentIndex - 2
        }
        console.log(this._currentIndex)
    }

    soma(){

    }

    subtracao(){

    }

    multiplicacao(){

    }

    divisao(){

    }

    porcento(){

    }

    igual(){

    }

    addOperation(value){
        if(this._operation.length == 0 || isNaN(value)){
            this._operation.push(value)
        }else{
            this.addValue(value)
        }
    }

    addValue(value) {
        let newValue;

        console.log(this._operation)
        console.log(this._currentIndex)

        this._operation[this._currentIndex] ?
            newValue = this._operation[this._currentIndex].toString() + value.toString()
            :
            newValue = value

        this._operation[this._currentIndex] = parseInt(newValue)
    }

    setError(){
        this.displayCalc = "ERROR"
    }

    addEventListenerAll(element,events, fn){
        events.forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }

    setDusplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day:'2-digit',
            month: 'long',
            year: 'numeric'
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayDate(){
        return this._date.innerHTML;
    }

    set displayDate(value){
        this._date.innerHTML = value;
    }

    get displayTime(){
        return this._time.innerHTML;
    }

    set displayTime(value){
        this._time.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalc.innerHTML;
    }

    set displayCalc(value){
        this._displayCalc.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._dateNow = value;
    }
}