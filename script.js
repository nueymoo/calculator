$(document).ready(function() {

    let total = ''

    $(".n").on('click', function(){
        let number = $(this).html()
        if (total.length <= 5) {
        total = total + number
        console.log(left, total)
        $(".sum").html(total)
        }
    })

    let left
    let oparation

    $('.plus').on('click', function() {
        if (left && total) {
            left = calculation().toString()
        }
       else { 
        left = total 
        }  
        total = ''    
        oparation = '+'
    })

    $('.minus').on('click', function() {
        if (left && total) {
            left = calculation().toString()
        }
       else { 
        left = total 
        }
        total = '' 
        oparation = '-'
    })
  
    $('.multiple').on('click', function() {
        if (left && total) {
            left = calculation().toString()
        }
       else { 
        left = total 
        }     
        total = '' 
        oparation = 'x'
    })

    $('.divide').on('click', function() {
        if (left && total) {
            left = calculation().toString()
        }
       else { 
        left = total 
        }     
        total = '' 
        oparation = '÷'
    })

    $('.equel').on('click',function() {
       if (left && total) { 
        calculation()
        total = ''
        left = ''
       }
       else {
           $('.sum').html('0')
           total = ''
            left = ''
       }
    })

    function calculation() {
        let leftnumber = parseFloat(left)
        let totalnumber = parseFloat(total)
        let sum
        
        if (oparation === '+') {
            sum = leftnumber + totalnumber 
        }
        else if (oparation === '-') {
            sum = leftnumber - totalnumber
        }
        else if (oparation === 'x') {
            sum = leftnumber * totalnumber
        }
        else if (oparation === '÷') {
            sum = leftnumber / totalnumber
            sum = sum.toFixed(2)
        }
        $(".sum").html(sum)
        
        if (sum > 1000000) {
            $('.sum').html('ERROR')
        }

        return sum
    }

})