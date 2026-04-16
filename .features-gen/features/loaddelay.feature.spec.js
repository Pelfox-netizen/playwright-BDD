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

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/loaddelay.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the Load Delay page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the button should not be visible initially","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I wait for the button to load","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the button should be visible","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And the button should be clickable","stepMatchArguments":[]}]},
]; // bdd-data-end