function validate_form() {
    let flag = true;

    clear_alerts();
    if (!validate_username()) flag = false;
    if (!validate_password()) flag = false;
    if (!validate_confirm_password()) flag = false;
    if (!validate_name()) flag = false;
    if (!validate_email()) flag = false;
    if (!validate_address()) flag = false;
    if (!validate_country()) flag = false;
    if (!validate_pin()) flag = false;
    if (!validate_gender()) flag = false;
    if (!validate_lang()) flag = false;
    if (!validate_about()) flag = false;
    if(flag){
        alert('All details are correct');
        return true;
    } 
    return false;
}

function clear_alerts(){
    alerts = document.querySelectorAll('.alert_span');
    for(alert of alerts){
        alert.style.display = 'none';
    }
}

function validate_username() {
    uname = document.forms.my_form.uname.value;
    if (5 > uname.length ||  uname.length > 20) {
        red = document.querySelector('#alert_uname');
        red.style.display = 'block';
        return false;
    }
    return true;
}

function validate_password() {
    pword = document.forms.my_form.pword.value;
    if (8 > pword.length || pword.length > 20) {
        red = document.querySelector('#alert_pword');
        red.style.display = 'block';
        return false;
    }
    return true;
}

function validate_confirm_password() {
    pword = document.forms.my_form.pword.value;
    pword2 = document.forms.my_form.pword2.value;
    if(pword != pword2) {
        red = document.querySelector('#alert_pword2');
        red.style.display = 'block';
        return false;
    }
    return true;
}

function validate_name() {
    fname = document.forms.my_form.fname.value;
    if(fname.length < 5 || fname.length > 30) {
        red = document.querySelector('#alert_fname');
        red.style.display = 'block';
        return false;
    }
    return true;
}

function validate_email() {
    email = document.forms.my_form.email.value;
    if(!email.match(/[a-z0-9-_\.]+@[a-z0-9-\.]+\.[a-z0-9-\.][a-z0-9-\.]+/gi)) {
        red = document.querySelector('#alert_email');
        red.style.display = 'block';
        return false;
    }
    return true;
}

function validate_address() {
    address = document.forms.my_form.address.value;
    if(!address) {
        red = document.querySelector('#alert_address');
        red.style.display = 'block';
        return false;
    }
    return true;
}

function validate_country() {
    country = document.forms.my_form.country.value;
    if(country == 'select') {
        red = document.querySelector('#alert_country');
        red.style.display = 'block';
        return false;
    }
    return true;
}

function validate_pin() {
    pincode = document.forms.my_form.pin.value;
    if(pincode.trim().length != 6){
        red = document.querySelector('#alert_pin');
        red.style.display = 'block';
        return false;
    }
    return true;
}

function validate_gender(){
    gender = document.forms.my_form.gender.value;
    if (gender == ''){
        red = document.querySelector('#alert_gender');
        red.style.display = 'block';
        return false;
    }
    return true;
}

function validate_lang(){
    hindi = document.forms.my_form.lang[0].checked;
    english = document.forms.my_form.lang[1].checked;
    if (hindi == false && english == false){
        red = document.querySelector('#alert_lang');
        red.style.display = 'block';
        return false;
    }
    return true;
}

function validate_about(){
    about = document.forms.my_form.about.value;
    if (about.trim() == ''){
        red = document.querySelector('#alert_about');
        red.style.display = 'block';
        return false;
    }
    return true;
}

clear_alerts();