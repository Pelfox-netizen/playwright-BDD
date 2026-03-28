// Generated from: features/lighthouse-ai-home.feature
import { test } from "playwright-bdd";

test.describe('Lighthouse AI Homepage', () => {

  test('Homepage loads successfully', async ({ Given, Then, page }) => { 
    await Given('I navigate to the Lighthouse AI home page', null, { page }); 
    await Then('the page should be visible', null, { page }); 
  });

  test('Homepage has proper title', async ({ Given, Then, page }) => { 
    await Given('I navigate to the Lighthouse AI home page', null, { page }); 
    await Then('the page title should contain "Lighthouse"', null, { page }); 
  });

  test('Navigate to Resources Press Releases and verify page title', async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the Lighthouse AI home page', null, { page }); 
    await When('I click on the Resources Press Releases link', null, { page }); 
    await Then('the page title should contain "Press Releases"', null, { page }); 
  });

  test('Navigate to About/Company and verify page title', async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the Lighthouse AI home page', null, { page }); 
    await When('I click on the About Company link', null, { page }); 
    await Then('the page title should contain "About Us"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/lighthouse-ai-home.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the Lighthouse AI home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the page should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I navigate to the Lighthouse AI home page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the page title should contain \"Lighthouse\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Lighthouse\"","children":[{"start":31,"value":"Lighthouse","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given I navigate to the Lighthouse AI home page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I click on the Resources Press Releases link","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the page title should contain \"Press Releases\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Press Releases\"","children":[{"start":31,"value":"Press Releases","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I navigate to the Lighthouse AI home page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on the About Company link","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the page title should contain \"About Us\"","stepMatchArguments":[{"group":{"start":30,"value":"\"About Us\"","children":[{"start":31,"value":"About Us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end