// Generated from: features/dynamictable.feature
import { test } from "playwright-bdd";

test.describe('Dynamic Table', () => {

  test('Navigate to the Dynamic Table page from home', async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the UI Testing Playground home page', null, { page }); 
    await When('I open the Dynamic Table page', null, { page }); 
    await Then('the page title should contain "Dynamic Table"', null, { page }); 
  });

  test('Verify Chrome CPU value matches the summary', async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the UI Testing Playground home page', null, { page }); 
    await When('I open the Dynamic Table page', null, { page }); 
    await Then('the Chrome CPU value should match the yellow label', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/dynamictable.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the UI Testing Playground home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I open the Dynamic Table page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the page title should contain \"Dynamic Table\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Dynamic Table\"","children":[{"start":31,"value":"Dynamic Table","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I navigate to the UI Testing Playground home page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I open the Dynamic Table page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the Chrome CPU value should match the yellow label","stepMatchArguments":[]}]},
]; // bdd-data-end