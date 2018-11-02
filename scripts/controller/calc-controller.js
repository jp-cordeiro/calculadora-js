class CalController{
    constructor(){

        this._locale = "pt-BR"

        this._displayCalc = document.querySelector("#display")
        this._date = document.querySelector("#data")
        this._time = document.querySelector("#hora")
        this._currentDate;

        this.initialize();
    }

    initialize(){
        this.setDusplayDateTime()

        setInterval(() => {
            this.setDusplayDateTime()
        },1000)
    }

    setDusplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day:'2-digit',
            month: 'long',
            year: 'numeric'
        })
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
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