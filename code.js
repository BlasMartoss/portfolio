var cross = false;

$('#burger_button').click(function(){
    // Alternar la visibilidad del menú de la hamburguesa al hacer clic
    $('#burger_menu').slideToggle();
});



// Function to display the cross on burger menu
function display_cross(){
    var firstDiv = document.getElementById("first_button_div");
    var secondDiv = document.getElementById("second_button_div");
    var thirdDiv = document.getElementById("third_button_div");

    if (!cross){
        firstDiv.style.transform= "rotate(45deg)";
        secondDiv.style.opacity = 0;
        thirdDiv.style.transform= "rotate(-45deg)";
    }
    else{
        firstDiv.style.transform= "rotate(0)";
        secondDiv.style.opacity = 1;
        thirdDiv.style.transform= "rotate(0)";  
    }
    // Toggle cross value
    cross = !cross; 
}