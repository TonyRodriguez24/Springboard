//what is jquery


//selecting elements

$("ul")

//$ css selector syntax
$("h1")
//what we get back is a jquery object
//not the same as a dom element

//.get() method

$("h1").get();
//returns the dom element

//jquery methods

//.val() method
$("input").val();
//returns the value of the input

//.text() method
$("h1").text();
//returns the text of the h1

//.html() method
$("ul").html();
//returns the html of the ul

//jquery getter and setter pattern

$("h1").text("new text");

//jquery chaining
//allows us to call multiple methods on the same object in a single statement

$("h1").text("new text").css("color", "blue");

//jquery traversal methods
//methods that allow us to move up and down the dom tree

const $specialLi = $("li").eq(3);
$specialLi.next();
$specialLi.prev();
$specialLi.parent();
$specialLi.children();

//find
$("ul").find("li");
//does the same thing as children but it goes deeper


//creating, removing, and manipulating elements

//.append() method

document.createElement("h2").innerText = "new h2";

$("ul").append("<li class = 'highlight'>I AM NEW</li>");

$("li").append('<input type="checkbox"/>');

//.prepend() method
$("ul").prepend("<li> I AM FIRST </li>");

$('<h1>HELLO</h1>').css("color", "blue").appendTo("body");

$("li").after("<bold>HI</bold>");
$("h1").remove();
$("li").remove();


//jquery continued
//events and delegation with jquery

//$("img").click( function(){
//    alert("image clicked");
//});

//.on() method most people use this
//.on() method allows us to specify the type of event we want to listen for
//and the code that we want to run when that event occurs

//on is better to leverage event delegation

$("img").on("mouseleave", function(){
    $(this).css("border", "3px solid red");
})

//on is better to leverage event delegation

$("#add-input").on("click", function(){
    $("form").append('<input type="text"/>');
})

$("form").on("focus", "input", function(){
    $(this).val("BAMBOOZLED");
})

//jquery recap
//jquery is a library that makes it easier to work with the dom
//jquery allows us to select elements, manipulate elements, and listen for events
//jquery is built on top of vanilla javascript
//jquery is not as popular as it used to be
//jquery is still used in some legacy codebases
//jquery is still used in some modern codebases

//jquery makes it easier to work with the dom
