package cucmberRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "Features"
		,glue={"stepDefinition"}
		,plugin={"html:target/login.report",
	             "json:target/cucumber-report.json"}
		)
 
public class TestRunner {
}
