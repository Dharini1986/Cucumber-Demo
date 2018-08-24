Feature: Cucumber Integration with Jenkins and Qmetry

  Scenario Outline: Login Ultimatix page
    Given User navigates to "https://www.ultimatix.net"
    When User enters  "<usname>"  and  "<upwd>"
    And User Clicks on login button
    Then Ultimatix homepage  needs to be displayed

    Examples: 
      | usname | upwd            |
      | 255628 | Dontforget@12345 |
