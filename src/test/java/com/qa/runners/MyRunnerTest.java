package com.qa.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;



@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty","html:target/cucumber","summary"},
        features = {"src/test/resources"},
        glue = {"src/test/java/com/qa/stepdef"},
        snippets = CucumberOptions.SnippetType.CAMELCASE
        ,dryRun = true
        ,monochrome = true
        ,strict = true
)
public class MyRunnerTest {

}
