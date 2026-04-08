// Generated from: features/hiddenlayers.feature
import { test } from "playwright-bdd";

test.describe('Hidden Layers', () => {

  test('Navigate to the Hidden Layers page from home', async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the UI Testing Playground home page', null, { page }); 
    await When('I open the Hidden Layers page', null, { page }); 
    await Then('the page title should contain "Hidden Layers"', null, { page }); 
  });

  test('The green button should not be clickable twice', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the UI Testing Playground home page', null, { page }); 
    await When('I open the Hidden Layers page', null, { page }); 
    await And('I click the green button on the Hidden Layers page', null, { page }); 
    await Then('the green button should be covered by another layer', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/hiddenlayers.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the UI Testing Playground home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I open the Hidden Layers page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the page title should contain \"Hidden Layers\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Hidden Layers\"","children":[{"start":31,"value":"Hidden Layers","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I navigate to the UI Testing Playground home page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I open the Hidden Layers page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I click the green button on the Hidden Layers page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the green button should be covered by another layer","stepMatchArguments":[]}]},
]; // bdd-data-end