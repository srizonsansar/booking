import datepickerFactory from 'jquery-datepicker';

export function formJS(){

    formDatePicker()
    noOfPerson()
    hideForm1()
    backBtn()

}

function formDatePicker(){
    
    datepickerFactory($);
    $("#selectDate").datepicker({
        dateFormat: 'dd-mm-yy',
        minDate: +1,
        maxDate: "+1M +30D",

    });
    $('#date-picker-div').append($('#ui-datepicker-div'));
}

function noOfPerson(){

    var guestNo = document.getElementById('max').innerHTML
    var noOfGuest = Number(guestNo)

    $('.form__field--btn.plus').on('click', function(){
        var inputValue = $('.form__field--number input').attr('value')
        if(inputValue < noOfGuest){
            inputValue++
        }
        $('.form__field--number input').attr('value', inputValue)
    })

    $('.form__field--btn.minus').on('click', function(){
        var inputValue = $('.form__field--number input').attr('value')
        if(inputValue > 1){
            inputValue--
        }
        $('.form__field--number input').attr('value', inputValue)
    })

}

function hideForm1(){
    $('.nearByTime__list--item').on('click', function(){
        $('.mainBlock__selection').hide()
        $('.mainBlock__booking').fadeIn()
    })
}

function backBtn(){
    $('.mainBlock__timing--back').on('click', function(){
        $('.mainBlock__booking').hide()
        $('.mainBlock__selection').fadeIn()
    })
}