// Generated from: features/autowait.feature
import { test } from "playwright-bdd";

test.describe('Auto Wait', () => {

  test('Click the target button after it becomes interactable', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the UI Testing Playground home page', null, { page }); 
    await When('I open the Auto Wait page', null, { page }); 
    await And('I make the target button temporarily covered', null, { page }); 
    await And('I apply the 3 second auto wait settings', null, { page }); 
    await And('I click the auto wait target button', null, { page }); 
    await Then('the auto wait target should report it was clicked', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/autowait.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the UI Testing Playground home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I open the Auto Wait page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I make the target button temporarily covered","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I apply the 3 second auto wait settings","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I click the auto wait target button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the auto wait target should report it was clicked","stepMatchArguments":[]}]},
]; // bdd-data-end