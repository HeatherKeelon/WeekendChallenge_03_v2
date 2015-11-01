/**
 * Created by user on 10/30/15.
 */
function doMath(mathobject){
    console.log(mathobject);
    var num1 = Number(mathobject["value1"]);
    var num2 = Number(mathobject["value2"]);
    var calc = mathobject["calculation"];
    var answer = 0;


    switch (calc){
        case "add":
            answer=num1 + num2;
            console.log(answer);
            break;
        case "subtract":
            answer=num1 - num2;
            //console.log(answer);
            break;
        case "multiply":
            answer=num1 * num2;
            break;
        case "divide":
            answer=num1 / num2;
            break;

        default:
            console.log("switch not working");
    }
    return answer;//This does console.log out. So, this portion is working, and the POST data from client is making it in.
}


module.exports = doMath;

