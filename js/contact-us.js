
var pEmailInput = document.getElementById('productEmail');
var pPasswordInput = document.getElementById('productPassword');
var pNumberInput = document.getElementById('productNumber');
var pNameInput = document.getElementById('productName');
var pAgeInput = document.getElementById('productAge');

var rowEl = document.getElementById('row');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');
var pIndexToUpdate = -1;

//! localStorage.setItem('name','menna')
//! [{}] ==(JSON.stringify)==> string 
//! [{}] <==(JSON.parse)== string 
//! local storge ====> string | null (only two opation)

var pList; //! it have two opation

if (localStorage.getItem('Product') !== null) {
    //! old user
    //! [{}] <==(JSON.parse)== string 
    pList = JSON.parse(localStorage.getItem('Product'));
    displayPList();
} else {
    //! null
    pList = [];
}


//!<button onclick="addProduct();"
function addProduct() {
    if (pEmailInput.value == '' || pPasswordInput == '' || pNumberInput == '' || pNameInput == '' || pAgeInput == '')
        return;
    //!object
    var product = {
        email: pEmailInput.value,
        password: pPasswordInput.value,
        number: pNumberInput.value,
        age : pAgeInput.value ,
        name : pNameInput.value ,
    }

    pList.push(product);
    //!displayProduct(product , index);
    //! pList JOSN ===> string
    //! [{}] ==(JSON.stringify)==> string 
    localStorage.setItem('Product', JSON.stringify(pList)) //! to save the data (like string)
    //! clearInputs();
    console.log(pList);
}


//! يفضي بعد ما اكتب
function clearInputs() {
    pEmailInput.value = '';
    pPasswordInput.value = '';
    pNumberInput.value = '';
    pAgeInput.value = '';
    pNameInput.value = '';
}





function validateInput(inputId, regExkey , alertElId) {
    var input = document.getElementById(inputId);
    var regEx = {
        email: /^[A-za-z0-9]{3,}\@gmail\.com$/,
        password: /^[A-Za-z]{1,}[0-9]{1,}[A-za-z0-9]{6,}$/,
        number: /^01[0125][0-9]{8}$/,
        age: /^[0-9]{1,2}$/,
        name:/^[A-Za-z]{1,}$/,
    }

    var isValid = regEx[regExkey].test(input.value);
    input.classList.remove('is-valid', 'is-invalid'); //! لانه الاتنين بيطلعوا علي حسب ترتيبهم في بوتستراب(override)
    if (isValid) {
        input.classList.add('is-valid')
        document.getElementById(alertElId).classList.replace('d-block', 'd-none');
        //! if you text false alert hidde
    } else {
        input.classList.add('is-invalid')
        document.getElementById(alertElId).classList.replace('d-none', 'd-block');
        //! if you text false alert show 
    }

}





