// Generated from: features/scrollbars.feature
import { test } from "playwright-bdd";

test.describe('Scrollbars', () => {

  test('Scroll to hidden button', async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the Scrollbars page', null, { page }); 
    await Then('the hidden button should not be in viewport', null, { page }); 
    await When('I scroll down to the button', null, { page }); 
    await Then('the button should be visible in the viewport', null, { page }); 
  });

  test('Click button after scrolling', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the Scrollbars page', null, { page }); 
    await When('I scroll down to the button', null, { page }); 
    await And('I click on the scrolled button', null, { page }); 
    await Then('the page should display a success message', null, { page }); 
  });

  test('Scroll back to top', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the Scrollbars page', null, { page }); 
    await When('I scroll down to the button', null, { page }); 
    await And('I scroll back to the top', null, { page }); 
    await Then('the button should not be in viewport', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/scrollbars.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the Scrollbars page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the hidden button should not be in viewport","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I scroll down to the button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the button should be visible in the viewport","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I navigate to the Scrollbars page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I scroll down to the button","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I click on the scrolled button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the page should display a success message","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I navigate to the Scrollbars page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I scroll down to the button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And I scroll back to the top","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the button should not be in viewport","stepMatchArguments":[]}]},
]; // bdd-data-end