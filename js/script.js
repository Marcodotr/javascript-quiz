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

// disable/ enable buttons not in use
function greyout() {
     document.getElementById("nextbtn").disabled = true;
     disable();
}

function enable() {
    document.getElementById("answer1").disabled = false;
    document.getElementById("answer2").disabled = false;
    document.getElementById("answer3").disabled = false;
    document.getElementById("answer4").disabled = false;
}

function disable() {
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;
}

greyout()

function displayhigh() {
     document.getElementById("high").style.display = "none" 
 }
 displayhigh()

function displaytrue() {
     document.getElementById("high").style.display = "block"
 }

// questions and answers
var question =  ["what will a boolean return?","what will .pop() do to an array?"," using JQuery what will a click event look like?","in CSS how can you call element by id?","what does CSS mean?","which of these does not declare variable?","how can i console log 'hello'","where can i find premade html/js/css formats","how would you round the number 5.87 to the nearest integer"]
var answer1 = ["number","returns a new array that is this array joined with other array(s) and/or value(s)","if 'x' is clicked {}","@","Cascading Style Sheet","const",".console-log('hello')","bootstrap","rnd(5.87)"]
var answer2 = ["true/false","calls a function for each element in array","x.on('click',{})","#","Counter Strike Source","let","console.log'hello'","mozilla","math.rnd(5.87)"]
var answer3 = ["text ' ... '","extracts a section of the calling array and returns a new array","x.addEventListener('click',{})","*","Code Support System","for",".console-log'hello'","github","math.round(5.87)"]
var answer4 = ["string","removes the last element from an array and returns that element","x.click({})",".","Cumstom Style Sheet","var","console.log('hello')","w3","round(5.87)"]
var actual = ["true/false","removes the last element from an array and returns that element","x.on('click',{})","#","Cascading Style Sheet","for","console.log('hello')","bootstrap","math.round(5.87)"];
var seconds = document.getElementById("timer").textContent;

// start of game
startE1.on('click',function(){
    questionE1.append(question[0]);
    buttonE1.append(answer1[0]); 
    buttonE2.append(answer2[0]);
    buttonE3.append(answer3[0]);
    buttonE4.append(answer4[0]);
    document.getElementById("nextbtn").disabled = false;
    document.getElementById("start").disabled =true;
    enable();
    var seconds = document.getElementById("timer").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("timer").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);
    setTimeout(function() {
        displaytrue()
        disable();},60000)

    })

nextbtnE1.on('click', function(){
    questionE1.text('');
    questionE1.append(question[0]);
    buttonE1.text('');
    buttonE1.append(answer1[0]);
    buttonE2.text('');
    buttonE2.append(answer2[0]);
    buttonE3.text('');
    buttonE3.append(answer3[0]);
    buttonE4.text('');
    buttonE4.append(answer4[0]);
    resultE1.text('');
    enable();
    
})

function cylce() {
    question.shift();
    answer1.shift();
    answer2.shift();
    answer3.shift();
    answer4.shift();
}

//game logic
buttonE1.on('click', function(){
    if ((actual.includes(answer1[0])) === true) {
        resultE1.append("correct")
        scoreE1.innerHTML = parseInt(scoreE1.innerHTML) +1;
    }
    else 
    resultE1.append('wrong');
    disable();
    cylce();
})


buttonE2.on('click', function(){
    if ((actual.includes(answer2[0])) === true) {
        resultE1.append("correct");
       scoreE1.innerHTML = parseInt(scoreE1.innerHTML) +1;
    }
    else resultE1.append('wrong');
    disable();
    cylce();
})

buttonE3.on('click', function(){
    if ((actual.includes(answer3[0])) === true) {
        resultE1.append("correct")
        scoreE1.innerHTML = parseInt(scoreE1.innerHTML) +1;
    }
    else 
    resultE1.append('wrong');
    disable();
    cylce();
})

buttonE4.on('click', function(){
    if ((actual.includes(answer4[0])) === true) {
        resultE1.append("correct")
        scoreE1.innerHTML = parseInt(scoreE1.innerHTML) +1;
    }
    else 
    resultE1.append('wrong');
    disable();
    cylce();

})

// high score logic
var highscoreFormEl = $('#addbtn');
var highscoreListEl = $('#initials-list');
var listText = $('#highscore-input');
function addItem() {
    var listItem = $('<li>');
    listItem.text(listText.val() + '  ' + scoreE1.textContent);
    highscoreListEl.append(listItem);
    $('input[type="text"]').val('');
    document.getElementById("addbtn").disabled = true;
}

highscoreFormEl.on('click', addItem)

