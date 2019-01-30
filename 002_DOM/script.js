//-----------------------------------------------------------------task 0
function choose(element){
  if (!element.classList.contains('chosen')){
    element.classList.add('chosen');
}
else{
    element.classList.remove('chosen');
}
}

function chooseDiv(){
    var e = document.getElementById('test_div');
    choose(e);
}

function chooseAllLinks(){
    var e = document.getElementsByTagName('a');
    for (var i = 0; i < e.length; i++) {
        choose(e[i]);
    }
}

function chooseParagraphs(){
    var e = document.getElementsByTagName('p');
    for (var i = 0; i < e.length; i++) {
        choose(e[i]);
    }
}

//------------------------------------------------------------------task 1
//using Object
// window.onload = function(){
//   var Module1 = {};
//
//   Module1.chooseParagraphs = function(){
//     var e = document.getElementsByTagName('p');
//     for (var i = 0; i < e.length; i++) {
//         e[i].innerHTML = 'PARAGRAPH';
//     }
//   }
//
//   Module1.chooseParagraphs();
// }

//using anonymous function
(function () {
  var chooseParagraphs = function(){
    var e = document.getElementsByTagName('p');
    for (var i = 0; i < e.length; i++) {
        e[i].innerHTML = 'PARAGRAPH';
    }
  }
  chooseParagraphs();
})();

//----------------------------------------------------------------task 2
function addParagraph(){
    var pList = document.getElementsByTagName('p');
    if(pList.length<9){
      var element = document.createElement('P');
      element.innerHTML = "Added paragraph";
      var div = document.createElement('DIV');
      div.appendChild(element);
      document.body.appendChild(div);
    }
    else{
      for(var i=pList.length-1; i>=0; i--){
        var p = pList[i];
            p.parentNode.removeChild(p);
        }
    }
}
//---------------------------------------------------------------task 3

function chooseClass(){
    var e = document.getElementsByClassName('chosen');
    for (var i = 0; i < e.length; i++) {
        e[i].style.color = "green";
    }
}
