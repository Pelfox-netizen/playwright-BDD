// Generated from: features/shadowdom.feature
import { test } from "playwright-bdd";

test.describe('Shadow DOM', () => {

  test('Navigate to the Shadow DOM page from home', async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the UI Testing Playground home page', null, { page }); 
    await When('I open the Shadow DOM page', null, { page }); 
    await Then('the page title should contain "Shadow DOM"', null, { page }); 
  });

  test('Generate and copy a guid from the Shadow DOM component', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the UI Testing Playground home page', null, { page }); 
    await When('I open the Shadow DOM page', null, { page }); 
    await And('I generate a guid in the Shadow DOM component', null, { page }); 
    await And('I copy the guid from the Shadow DOM component', null, { page }); 
    await Then('the clipboard value should match the generated guid', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/shadowdom.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the UI Testing Playground home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I open the Shadow DOM page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the page title should contain \"Shadow DOM\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Shadow DOM\"","children":[{"start":31,"value":"Shadow DOM","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I navigate to the UI Testing Playground home page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I open the Shadow DOM page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I generate a guid in the Shadow DOM component","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I copy the guid from the Shadow DOM component","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the clipboard value should match the generated guid","stepMatchArguments":[]}]},
]; // bdd-data-end