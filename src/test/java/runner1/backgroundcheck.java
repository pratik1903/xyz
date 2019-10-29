package runner1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Training_h2a.06.17\\eclipse-workspace\\cucumbercasestudy\\feature\\backgroundcheck.feature",glue= {"cucumbercasestudy.cucumbercasestudy"},
tags= {"@login","@xregister"}, plugin= {"pretty","html:target/backgroundcheck"}
)

public class backgroundcheck {

}
