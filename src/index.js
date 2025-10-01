'use strict';

const form = document.querySelector('form');

class Person {
    constructor(firstName, lastName, nickName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.email = email;
    }
}

function onSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;

    const firstNameValue = formElements.firstName.value.trim();
    const lastNameValue = formElements.lastName.value.trim();
    const nickNameValue = formElements.nickName.value.trim();
    const emailValue = formElements.email.value.trim();

    if (!lastNameValue) {
        console.log('Cannot save: Last Name is required as a key');
        form.reset();
        return;
    }

    const person = new Person(
        firstNameValue || 'Not provided',
        lastNameValue || 'Not provided',
        nickNameValue || 'Not provided',
        emailValue || 'Not provided'
    );

    localStorage.setItem(lastNameValue, JSON.stringify(person));

    form.reset();
}

form.addEventListener('submit', onSubmit);

// const firstName = document.querySelector('input[name="first-name"]');
// const lastName = document.querySelector('input[name="last-name"]');
// const nickName = document.querySelector('input[name="nick-name"]');
// const email = document.querySelector('input[name="email"]');

// class Person {
//     constructor(firstName, lastName, nickName, email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.nickName = nickName;
//         this.email = email;
//     }
// }

// function onSubmit(event) {
//     event.preventDefault();
//     const firstNameValue = firstName.value || 'Value does not provided';
//     const lastNameValue = lastName.value || 'Value does not provided';
//     const nickNameValue = nickName.value || 'Value does not provided';
//     const emailValue = email.value || 'Value does not provided';

//     localStorage.setItem(
//         lastNameValue,
//         JSON.stringify(
//             new Person(firstNameValue, lastNameValue, nickNameValue, emailValue)
//         )
//     );
// }

// const buttonSubmit = document.querySelector('button[type="submit"]');
// buttonSubmit.addEventListener('click', onSubmit);
