// Generated from: features/loaddelay.feature
import { test } from "playwright-bdd";

test.describe('Load Delays', () => {

  test('Wait for button to load after delay', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the Load Delay page', null, { page }); 
    await Then('the button should not be visible initially', null, { page }); 
    await When('I wait for the button to load', null, { page }); 
    await Then('the button should be visible', null, { page }); 
    await And('the button should be clickable', null, { page }); 
  });

  test('Click button after it loads', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the Load Delay page', null, { page }); 
    await When('I wait for the button to load', null, { page }); 
    await And('I click on the loaded button', null, { page }); 
    await Then('the page should display a success message', null, { page }); 
  });

  test('Verify load delay timeout handling', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the Load Delay page', null, { page }); 
    await When('I set a timeout of 5 seconds', null, { page }); 
    await And('I wait for the button with timeout', null, { page }); 
    await Then('the button should be visible before timeout expires', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/loaddelay.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the Load Delay page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the button should not be visible initially","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I wait for the button to load","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the button should be visible","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And the button should be clickable","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I navigate to the Load Delay page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I wait for the button to load","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And I click on the loaded button","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the page should display a success message","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I navigate to the Load Delay page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I set a timeout of 5 seconds","stepMatchArguments":[{"group":{"start":19,"value":"5","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And I wait for the button with timeout","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the button should be visible before timeout expires","stepMatchArguments":[]}]},
]; // bdd-data-end