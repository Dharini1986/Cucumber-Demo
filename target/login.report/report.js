$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Navigate_AgeChecker_Page.feature");
formatter.feature({
  "line": 1,
  "name": "Cucumber Integration with Jenkins and Qmetry",
  "description": "",
  "id": "cucumber-integration-with-jenkins-and-qmetry",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Ultimatix page",
  "description": "",
  "id": "cucumber-integration-with-jenkins-and-qmetry;login-ultimatix-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"https://www.ultimatix.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters  \"\u003cusname\u003e\"  and  \"\u003cupwd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Ultimatix homepage  needs to be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "cucumber-integration-with-jenkins-and-qmetry;login-ultimatix-page;",
  "rows": [
    {
      "cells": [
        "usname",
        "upwd"
      ],
      "line": 10,
      "id": "cucumber-integration-with-jenkins-and-qmetry;login-ultimatix-page;;1"
    },
    {
      "cells": [
        "255628",
        "Dontforget@1234"
      ],
      "line": 11,
      "id": "cucumber-integration-with-jenkins-and-qmetry;login-ultimatix-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login Ultimatix page",
  "description": "",
  "id": "cucumber-integration-with-jenkins-and-qmetry;login-ultimatix-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"https://www.ultimatix.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters  \"255628\"  and  \"Dontforget@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Ultimatix homepage  needs to be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ultimatix.net",
      "offset": 19
    }
  ],
  "location": "PensionageChecker.user_navigates_to(String)"
});
formatter.result({
  "duration": 16226572200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "255628",
      "offset": 14
    },
    {
      "val": "Dontforget@1234",
      "offset": 29
    }
  ],
  "location": "PensionageChecker.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2568047000,
  "status": "passed"
});
formatter.match({
  "location": "PensionageChecker.user_Clicks_on_login_button()"
});
formatter.result({
  "duration": 11426625300,
  "status": "passed"
});
formatter.match({
  "location": "PensionageChecker.ultimatix_homepage_needs_to_be_displayed()"
});
formatter.result({
  "duration": 2255014100,
  "status": "passed"
});
});