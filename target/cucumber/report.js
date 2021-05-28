$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Login.feature");
formatter.feature({
  "name": "Login Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with invalid user name",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter invalid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Login",
  "keyword": "And "
});
formatter.step({
  "name": "I should get error message \"\u003cerror\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error"
      ]
    },
    {
      "cells": [
        "invalidUsername",
        "secret_sauce",
        "Username and password do not match any user in this server"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with invalid user name",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter invalid username \"invalidUsername\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I enter the password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I Login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should get error message \"Username and password do not match any user in this server\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "Login with invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter invalid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Login",
  "keyword": "And "
});
formatter.step({
  "name": "I should get error message \"\u003cerror\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error"
      ]
    },
    {
      "cells": [
        "invalidUsername",
        "secret_sauce",
        "Username and password do not match any user in this server"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter invalid username \"invalidUsername\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I enter the password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I Login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should get error message \"Username and password do not match any user in this server\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "Login with valid user and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter valid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Login",
  "keyword": "And "
});
formatter.step({
  "name": "I successfully logon with success message \"\u003csuccess_message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "success_message"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "PRODUCTS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with valid user and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter valid username \"standard_user\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I enter the password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I Login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I successfully logon with success message \"PRODUCTS\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/Products.feature");
formatter.feature({
  "name": "Validate Products functions",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate product info on Products page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am Login with a valid username and valid password",
  "keyword": "Given "
});
formatter.step({
  "name": "the product is listed with title \"\u003ctitle\u003e\" and price \"\u003cprice\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "title",
        "price"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bolt T-shirt",
        "$15.99"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate product info on Products page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am Login with a valid username and valid password",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the product is listed with title \"Sauce Labs Bolt T-shirt\" and price \"$15.99\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "Validate product info on product details page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am logged in",
  "keyword": "Given "
});
formatter.step({
  "name": "I click title \"\u003ctitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should be on product details page with title \"\u003ctitle\u003e\",price \"\u003cprice\u003e\" and description \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "title",
        "price",
        "description"
      ]
    },
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99",
        "carry all the things with the sleek"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate product info on product details page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am logged in",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click title \"Sauce Labs Backpack\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should be on product details page with title \"Sauce Labs Backpack\",price \"$29.99\" and description \"carry all the things with the sleek\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});