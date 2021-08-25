// making variables for elements
var questionE1 = $('#question');
var buttonE1 = $('#answer1');
var buttonE2 = $('#answer2');
var buttonE3 = $('#answer3');
var buttonE4 = $('#answer4');
var resultE1 = $('#report');
var nextbtnE1 = $('#nextbtn');
var startE1 = $('#start');
var scoreE1 = document.getElementById('score');
var addbtn = document.getElementById('addbtn')


var QandA = [{question:["what will a boolean return?","what will .pop() do to an array?"," using JQuery what will a click event look like?","in CSS how can you call element by id?","what does CSS mean?","which of these does not declare variable?","how can i console log 'hello'","where can i find premade html/js/css formats","how would you round the number 5.87 to the nearest integer"],
answer1:["number","returns a new array that is this array joined with other array(s) and/or value(s)","if 'x' is clicked {}","@","Cascading Style Sheet","const",".console-log('hello')","bootstrap","rnd(5.87)"],
answer2:["true/false","calls a function for each element in array","x.on('click',{})","#","Counter Strike Source","let","console.log'hello'","mozilla","math.rnd(5.87)"],
answer3:["text ' ... '","extracts a section of the calling array and returns a new array","x.addEventListener('click',{})","*","Code Support System","for",".console-log'hello'","github","math.round(5.87)"],
answer4:["string","removes the last element from an array and returns that element","x.click({})",".","Cumstom Style Sheet","var","console.log('hello')","w3","round(5.87)"],
actual:["true/false","removes the last element from an array and returns that element","x.on('click',{})","#","Cascading Style Sheet","for","console.log('hello')","bootstrap","math.round(5.87)"]}]
function startGame() {
 countdown ;
 questionE1.text(QandA[0].question[0]);
 buttonE1.text(QandA[0].answer1[0]);
 buttonE2.text(QandA[0].answer2[0]);
 buttonE3.text(QandA[0].answer3[0]);
 buttonE4.text(QandA[0].answer4[0]);
 var seconds = 60, countdown = setInterval(function() {
    $('#timer').html(`Timer: ${seconds--}`) 
    if (seconds <= 0) clearInterval(countdown);
    }, 1000);
    setTimeout(function() {
    displaytrue()
    disable();},60000)

}

startE1.on('click',startGame)
var i = 0;
var answerbtn = $('.answerbtn')

answerbtn.on('click',cycle)
var score = 0;
function cycle() {
    console.log('hello')
    var clickedbtn = document.getElementById('answer1').clicked == true
    console.log(clickedbtn)
    if(answerbtn.clicked(true).text() == QandA[0].actual[i]){
        $('#score').html(`Score: ${score++}`)
        i++
        next(i)
        console.log('check')
    }else{
        i++
        next(i)
    }
}
function next(){
    questionE1.text(QandA[0].question[i]);
    buttonE1.text(QandA[0].answer1[i]);
    buttonE2.text(QandA[0].answer2[i]);
    buttonE3.text(QandA[0].answer3[i]);
    buttonE4.text(QandA[0].answer4[i]);
    
}


