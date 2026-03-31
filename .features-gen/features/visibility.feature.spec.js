// Generated from: features/visibility.feature
import { test } from "playwright-bdd";

test.describe('Visibility', () => {

  test('Navigate to the Visibility page from home', async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the UI Testing Playground home page', null, { page }); 
    await When('I open the Visibility page', null, { page }); 
    await Then('the Visibility page should be displayed', null, { page }); 
  });

  test('Hide button updates element visibility states', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the Visibility page', null, { page }); 
    await When('I click the Hide button', null, { page }); 
    await Then('the removed button should be hidden', null, { page }); 
    await And('the zero width button should be hidden', null, { page }); 
    await And('the transparent button should be hidden', null, { page }); 
    await And('the invisible button should be hidden', null, { page }); 
    await And('the not displayed button should be hidden', null, { page }); 
    await And('the offscreen button should be outside the viewport', null, { page }); 
    await And('the overlapped button should remain visible', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/visibility.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the UI Testing Playground home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I open the Visibility page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the Visibility page should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I navigate to the Visibility page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I click the Hide button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the removed button should be hidden","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the zero width button should be hidden","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the transparent button should be hidden","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And the invisible button should be hidden","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And the not displayed button should be hidden","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And the offscreen button should be outside the viewport","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And the overlapped button should remain visible","stepMatchArguments":[]}]},
]; // bdd-data-end