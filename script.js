// --Validity of input--
//targets the form & content
const form = document.getElementById('form');
const name = document.getElementById('name');
const contactnumber = document.getElementById('contactnumber');

//deletes the content of right-section
function blank(){
    event.preventDefault();
    document.getElementById("right-sect").children[0].textContent = "";
}

form.addEventListener('submit', (event) => {
    blank();
    checkInputs();
});

//removes content status if input was clicked before typing
name.addEventListener('click', (event) => {
    blank();
});

contactnumber.addEventListener('click', (event) => {
    blank();
});



function checkInputs(){
    //get the values from the inputs
    const nameValue = name.value.trim();
    const contactValue = contactnumber.value.trim();

    //check if the field was filled
    if (nameValue === ''){
    setErrorFor(name, "Error: Please check all the details before submitting.");
    }else{
    setSuccessFor(name);
    }

    const numCheck = /^(09|\+639)\d{9}$/;

    if (contactValue === '' || numCheck.test(contactValue) == false){
    setErrorFor(contactnumber, "Error: Please check all the details before submitting.");
    }else{
    setSuccessFor(contactnumber);
    }

    if (nameValue != '' & contactValue != '' & numCheck.test(contactValue) != false){
    document.getElementById("right-sect").children[0].textContent = "You have succesfully submitted your contact details.";
    }
}



//Status Functions
function setErrorFor(input, message){
    const formGroup = input.parentElement; //.form-group
    
    //add error class
    formGroup.className = 'form-group error';

    document.getElementById("right-sect").children[0].textContent = message;
    
}    

function setSuccessFor(input){
    const formGroup = input.parentElement; //.form-group
    
    //add error class
    formGroup.className = 'form-group success';
}

// ----------------------
// --Change Theme--

//uses localstorage to saves input/theme when refreshed
$('#left-panel').toggleClass(localStorage.toggled);

function darkLight() {
    /*DARK CLASS*/
    if (localStorage.toggled != 'dark') {
    $('#left-panel').toggleClass('dark', true);
    localStorage.toggled = "dark";
    
    } else {
    $('#left-panel').toggleClass('dark', false);
    localStorage.toggled = "";
    }
}

/*Add 'checked' property to input if background == dark*/
if ($('#left-panel').hasClass('dark')) {
    $( '#checkBox' ).prop( "checked", true )
} else {
    $( '#checkBox' ).prop( "checked", false )
}