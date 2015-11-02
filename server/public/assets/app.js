/**
 * Created by user on 10/30/15.
 */
    //Two variables. toBeCalculated handles the data being sent up to the sever, total is tracking the total of data coming from the server so that the calculator can chain multiple calculations.
var toBeCalculated = {};
var total=0;
//document ready handles all button events.
$(document).ready(function(){


    $('#one').on('click', function(){
        var text = $('.val-field');
        text.val(text.val() + '1');
    });

    $('#two').on('click', function(){
        var text = $('.val-field');
        text.val(text.val() + '2');
    });

    $('#three').on('click', function(){
        var text = $('.val-field');
        text.val(text.val() + '3');
    });

    $('#four').on('click', function(){
        var text = $('.val-field');
        text.val(text.val() + '4');
    });

    $('#five').on('click', function(){
        var text = $('.val-field');
        text.val(text.val() + '5');
    });

    $('#six').on('click', function(){
        var text = $('.val-field');
        text.val(text.val() + '6');
    });

    $('#seven').on('click', function(){
        var text = $('.val-field');
        text.val(text.val() + '7');
    });

    $('#eight').on('click', function(){
        var text = $('.val-field');
        text.val(text.val() + '8');
    });

    $('#nine').on('click', function(){
        var text = $('.val-field');
        text.val(text.val() + '9');
    });

    $('#zero').on('click', function(){
        var text = $('.val-field');
        text.val(text.val() + '0');
    });

    $('#decimal').on('click', function(){
        var text = $('.val-field');
        text.val(text.val() + '.');
    });
    //the calculations need an if/else depending upon whether or not total is 0.

    $("#addition").on('click', function(){
        if (total==0){
            calcValOne();
            changeName();
            toBeCalculated.calculation="add";
            console.log(toBeCalculated);
        }else {
            toBeCalculated.value1=total;
            toBeCalculated.calculation="add";
            changeName();
            $('.val-field').val("");
        }

    });

    $("#subtraction").on('click', function(){
        if (total==0){
            calcValOne();
            changeName();
            toBeCalculated.calculation="subtract";
            console.log(toBeCalculated);
        }else {
            toBeCalculated.value1=total;
            toBeCalculated.calculation="subtract";
            changeName();
            $('.val-field').val("");
        }

    });

    $("#multiplication").on('click', function(){
        if (total==0){
            calcValOne();
            changeName();
            toBeCalculated.calculation="multiply";
            console.log(toBeCalculated);
        }else {
            toBeCalculated.value1=total;
            toBeCalculated.calculation="multiply";
            changeName();
            $('.val-field').val("");
        }

    });

    $("#division").on('click', function(){
        if (total==0){
            calcValOne();
            changeName();
            toBeCalculated.calculation="divide";
            console.log(toBeCalculated);
        }else {
            toBeCalculated.value1=total;
            toBeCalculated.calculation="divide";
            changeName();
            $('.val-field').val("");
        }

    });

    $("#equals").on('click', function(){
            calcValTwo();
            console.log(toBeCalculated);
            getAnswer();
            originalName();


    });

    $("#clearBtn").on('click', '.clear', function(){
        $(".val-field").val("");
        total=0;
    });
});






//strips the entry field and determines value1 in toBeCalculated.
function calcValOne (){
    $.each($("#entryField").serializeArray(), function(i, field){
        toBeCalculated[field.name]=field.value;
    });

    $("#entryField").find("input[type=text]").val("");

}

//strips the entry field and determines value2 in toBeCalculated.
function calcValTwo(){
    $.each($("#entryField").serializeArray(), function(i, field){
        toBeCalculated[field.name]=field.value;
    });

    $("#entryField").find("input[type=text]").val("");

}

//ajax call that Posts the toBeCalculated object. Receives the answer of the calculation sent up as data.
function getAnswer(){
    $.ajax({
        type: "POST",
        url: "/math",
        data: toBeCalculated,
        beforeSend: function() {
            console.log("Here is the calculation object ", toBeCalculated);
        },
    success: function postAnswer(data){
            total=Number(data);

        $(".val-field").val(total);
    }

});

}

//The function for changing the name value in the input field. Used so that I can input a value1 and a value2 using the same field.
function changeName(){
    $("#entryField").children().last().attr('name', 'value2');
}

//Changes the input field's name attribute back to value1.
function originalName(){
    $("#entryField").children().last().attr('name', 'value1');
}
//function postAnswer(data){
//    $('#input-answer').text(data);
//}





