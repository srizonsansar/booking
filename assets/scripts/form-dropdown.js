export default class formDropDown{

    constructor(){
        this.dropDownOpener = $('.form__field--input.hasDropDown')
        this.dropDownItem = $('.form__field__dropDown--item')
        this.eventListener()
    }

    eventListener(){
        this.dropDownOpener.on('click', (e) => {
            this.showDropDown(e)
        })
        this.dropDownItem.on('click', (e) => {
            this.selectAndClose(e)
        })
    }

    showDropDown(e){
        var $this = $(e.currentTarget)
        var dropDownHolder = '.form__field__dropDown'
        $this.next(dropDownHolder).slideToggle()
    }

    selectAndClose(e){
        var $this = $(e.currentTarget)
        var valueToShow = '.form__field--input'
        $this.addClass('active')
        $this.siblings().removeClass('active')
        $this.parent().delay(500).slideUp()
        var selectedTime = $this.text()
        $this.parent().siblings(valueToShow).attr('value', selectedTime)
    }
    
}