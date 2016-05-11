"use strict";

define(function (require) {

    var AbstractView = require('./AbstractView');
    var appConstants = require('/app-constants');
    var facade = require('../facade.js');

    return function LogInView(parentController, parentElement) {
        // =====================================================================

        var view = document.createElement('div');
        view.setAttribute('name', this.constructor.name);
        view.style.width = '100%';
        view.style.height = '100%';
        view.style.display = 'table-cell';
        view.style.verticalAlign = 'middle';
        view.style.textAlign = 'center';
        view.className = 'fancyBox';

        var formDiv = document.createElement('div');
        formDiv.style.display = 'inline-block';
        formDiv.style.textAlign = 'center';
        view.appendChild(formDiv);

        var usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username: ';

        var usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.required = '';

        var usernameP = document.createElement('p');
        usernameP.appendChild(usernameLabel);
        usernameP.appendChild(usernameInput);

        var passwordLabel = document.createElement('label');
        passwordLabel.textContent = 'Password: ';

        var passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.required = '';

        var passwordP = document.createElement('p');
        passwordP.appendChild(passwordLabel);
        passwordP.appendChild(passwordInput);

        var button = document.createElement('input');
        button.type = 'button';
        button.value = 'Log In'
        button.className = 'myButton';

        formDiv.appendChild(document.createElement('br'));
        formDiv.appendChild(usernameP);
        formDiv.appendChild(document.createElement('br'));
        formDiv.appendChild(passwordP);
        formDiv.appendChild(document.createElement('br'));
        formDiv.appendChild(button);

        button.onclick = function () {
            if (usernameInput.value == '' || passwordInput.value == '') {
                alert('Fill username and password!');
            } else {
                facade.sendNotification(appConstants.C2S_LOG_IN_USER, {
                    username: usernameInput.value,
                    password: passwordInput.value
                });
            }
        }

        this.render = function () {
            console.log('LogInView.render()');
            AbstractView.append(view, parentElement);
        }

        this.remove = function () {
            if (view.parentNode == parentElement) {
                parentElement.removeChild(view);
            }
        };

        facade.subscribe(appConstants.S2C_INVALID_CREDENTIALS, function () {
            alert('Invalid credentials!');
        });

        // =====================================================================
    };
});
