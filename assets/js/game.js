// Question and answer object defined
var q1 = {
    id:1,
    question: 'HTML is what type of language?',
    option1: 'Scripting Language',
    option2: 'Markup Language',
    option3: 'Programming Language',
    option4: 'Network Protocol',
    answer: 'option2'
};
var q2= {
    id:2,
    question: 'HTML uses?',
    option1: 'User defined tags',
    option2: 'Pre-specified tags',
    option3: 'Fixed tags defined by the language',
    option4: 'Tags only for linking',
    answer: 'option3'
};
var q3= {
    id:3,
    question: 'The year in which HTML was first proposed ____.',
    option1: '1990',
    option2: '1980',
    option3: '2000',
    option4: '1995',
    answer: 'option1'
};
var q4= {
    id:4,
    question: 'Fundamental HTML Block is known as ____.',
    option1: 'HTML Body',
    option2: 'HTML Tag',
    option3: 'HTML Attribute',
    option4: 'HTML Element ',
    answer: 'option2'
};
var q5= {
    id:5,
    question: 'Apart from b tag, what other tag makes text bold ?',
    option1: 'fat',
    option2:'strong',
    option3: 'black',
    option5: 'emp',
    answer: 'option2'
};
var q6= {
    id:6,
    question: 'Who is Known as the father of World Wide Web (WWW)?',
    option1: 'Robert Cailliau',
    option2: 'Tim Thompson ',
    option3: 'Charles Darwin',
    option4: 'Tim Berners-Lee',
    answer: 'option4'
};
var q7= {
    id:7,
    question: 'What should be the first tag in any HTML document?',
    option1: 'head',
    option2: 'title',
    option3: 'html',
    option4: 'document',
    answer: 'option3'
};
var q8= {
    id:8,
    question: 'How can you make a bulleted list with numbers?',
    option1: 'dl',
    option2: 'ol',
    option3: 'list',
    option4:'ul',
    answer:'option2'
};
var q9= {
    id:9,
    question: 'What tag is used to display a picture in a HTML page?',
    option1: 'picture',
    option2:'image',
    option3:'img',
    option4:'src',
    answer:'option3'
};
var q10= {
    id:10,
    question: 'Which of the following is not a browser?',
    option1: 'Microsofts Bing',
    option2:'Netscape Navigator',
    option3:'Mozilla Firefox',
    option4:'Opera',
    answer:'option1'
};

// page loads function
$(document).ready(function(){
    var questionsObjects = [q1,q2, q3, q4, q5, q6, q7, q8, q9, q10];
    var yourAnswer;
    var correctAnswer=0;
    var inCorrectAnswer=0;
    var unAnswered=0;
    var numbersecond=60;
    var countRunning=false;
    var yourAnswer;
    var notexicuted=true;
    $(".quiz-section").css("display","none");
    $(".result-section").css("display","none");
    function createQuestions(arg) {
       for ( var i = 0; i < arg.length; i++) {

            // jQuery Object that takes the attributes of each Question
            var $question = $('<div id='+arg[i].id+'>');
            $question.append('<h3 class="question">'+arg[i].question);
            $question.append('<input type="radio" name='+ arg[i].id +' value="option1">' + arg[i].option1 + "  ");
            $question.append('<input type="radio" name='+ arg[i].id +' value="option2">' + arg[i].option2 + "  ");
            $question.append('<input type="radio" name='+ arg[i].id +' value="option3">' + arg[i].option3 + "  ");
            $question.append('<input type="radio" name='+ arg[i].id +' value="option4">' + arg[i].option4 + "  ");
            
            $(".question-box").append($question);
      }
    }
    //Start button click function
    $("#start-btn").on("click", function(){
       $(this).css("display","none");
       $(".quiz-section").css("display","block");
       countDown();
    });

    //Done button click function
    $("#done-btn").on("click", function(){
        $(".quiz-section").css("display","none");
        $(".result-section").css("display","block");
        countRunning=true;
        answerCheck(questionsObjects);
     });

     //CountDown function for defining the time
    function countDown(){
        if(countRunning===false){
        setTimeout(countDown, 1000);
        $("#count-down").html(numbersecond);
        --numbersecond;
        }
        if(numbersecond===0){
        $(".quiz-section").css("display","none");
        $(".result-section").css("display","block");
        countRunning=true;
        if(notexicuted===true){
            answerCheck(questionsObjects);
            notexicuted=false;
        }
      }
      
    }
    
    //Answer check function is called when defining time is out or when user cliked the done button
    function answerCheck(arg) {           
          for ( var i = 0; i < arg.length; i++) {
               var isChechek=$('#'+arg[i].id+'>'+'input:radio').is(':checked');
               var isValue=$('#'+arg[i].id+'>'+'input:radio:checked').val();
               //Check the result if checked answer is match the correct answer then correctAnswer will increase by one
                if(isChechek && (isValue === arg[i].answer)) {
                    correctAnswer++;
               
                } 
                //if checked answer is not match the correct answer then incorrect answer is increase by one
                else  if(isChechek && (isValue !== arg[i].answer)) {
                    inCorrectAnswer++;             
                }
                // if user not answer the question then unanswer is increase by one
                else if(!isChechek){
                     unAnswered++;
                }
              };
       //updating the result in to the html file
       $("#correct-answer").html(correctAnswer);
       $("#incorrect-answer").html(inCorrectAnswer);
       $("#un-answer").html(unAnswered);

    };

    createQuestions(questionsObjects);
    
});



