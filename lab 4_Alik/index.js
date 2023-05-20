function validateForm() {
    let email = document.forms[0]["email"].value;
    let firstName = document.forms[0]["first_name"].value;
    let lastName = document.forms[0]["last_name"].value;
    let phone = document.forms[0]["phone"].value;
    let fax = document.forms[0]["fax"].value;
    let age = document.forms[0]["age"].value;
    let birthDate = document.forms[0]["Date_of_Birth"].value;
    let dateIssued = document.forms[0]["date_issued"].value;
    let dateExpires = document.forms[0]["date_expires"].value;

if (!email.includes("@")) {
    alert("Please enter valid emal, that includes @ at the begining")
    return false;
}


if (!firstName.match(/^[a-zA-Z]+$/)) {
    alert("First name can only contain letters from a-z.");
    return false;
}


if (!lastName.match(/^[a-zA-Z]+$/)) {
    alert("Last name can only contain letters from a-z.");
    return false;
}

if (!phone.startsWith("8") || phone.length !== 11) {
    alert("Please enter a valid phone number starting with 8 and containing 11 digits.");
    return false;
}

if (!fax.startsWith("(") || fax[4] != ")" || fax.length !== 13) {
    alert("Please enter a valid fax number with first 3 digits gated in brackets and containing 11 digits.");
    return false;
}

if (age < 0 || age > 100) {
    alert("Please enter a valid age between 0 and 100.");
    return false;
}

let today = new Date();

let inputDate = new Date(birthDate);
if (inputDate > today) {
    alert("Please enter a valid birth date.");
    return false;
}

let inputissuedDate = new Date(dateIssued);
if (inputissuedDate > today) {
    alert("Please enter a valid issued date.");
    return false;
}

let inputexpiresDate = new Date(dateExpires);
if (inputexpiresDate < today) {
    alert("Please enter a valid expires date.");
    return false;
}
alert("Congrats!!!")
}