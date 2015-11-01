/**
 * Created by user on 10/30/15.
 */

var toBeCalculated = {};
var total=0;

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







function calcValOne (){
    $.each($("#entryField").serializeArray(), function(i, field){
        toBeCalculated[field.name]=field.value;
    });

    $("#entryField").find("input[type=text]").val("");

}

function calcValTwo(){
    $.each($("#entryField").serializeArray(), function(i, field){
        toBeCalculated[field.name]=field.value;
    });

    $("#entryField").find("input[type=text]").val("");

}

function getAnswer(){
    $.ajax({
        type: "POST",
        url: "/math",
        data: toBeCalculated,
        beforeSend: function() {
            console.log("Here is the calculation object ", toBeCalculated);
        },
    success: function postAnswer(data){
        if (total==0){
            total+=Number(data);
            console.log(total);
        }else{
            total=Number(data);
        }
        $(".val-field").val(total);
    }

});

}

function changeName(){
    $("#entryField").children().last().attr('name', 'value2');
}

function originalName(){
    $("#entryField").children().last().attr('name', 'value1');
}
//function postAnswer(data){
//    $('#input-answer').text(data);
//}





