
var numberofdrum=document.querySelectorAll(".drum").length;
for( var n=0; n<numberofdrum; n++)
{

document.querySelectorAll("Button")[n].addEventListener("click", function()
{
var buttonSound=this.innerHTML;

  makeSound(buttonSound);
  buttonAnimation(buttonSound);


});
}


document.addEventListener("keypress", function(event){
  var k=event.key;
  console.log(k);
  makeSound(k);
  buttonAnimation(k);
})



function makeSound(key){

  switch (key) {
    case "w":

    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
      break;

      case "a":

      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
        break;

        case "s":

        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
          break;

          case "d":

          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
            break;

            case "j":

            var audio = new Audio('sounds/snare.mp3');
            audio.play();
              break;

              case "k":

              var audio = new Audio('sounds/kick-bass.mp3');
              audio.play();
                break;

                case "l":

                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                  break;


    default:
       console.log(buttonSound);
     }

}


function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    }
  , 100)
}
