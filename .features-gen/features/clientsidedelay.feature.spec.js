// Generated from: features/clientsidedelay.feature
import { test } from "playwright-bdd";

test.describe('Client Side Delay', () => {

  test('Navigate to the Client Side Delay page from home', async ({ Given, When, Then, page }) => { 
    await Given('I navigate to the UI Testing Playground home page', null, { page }); 
    await When('I open the Client Side Delay page', null, { page }); 
    await Then('the page title should contain "Client Side Delay"', null, { page }); 
  });

  test('Trigger delayed client-side calculation', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the UI Testing Playground home page', null, { page }); 
    await When('I open the Client Side Delay page', null, { page }); 
    await And('I click the client side delay button', null, { page }); 
    await Then('the client side delay result should be displayed', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/clientsidedelay.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the UI Testing Playground home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I open the Client Side Delay page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the page title should contain \"Client Side Delay\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Client Side Delay\"","children":[{"start":31,"value":"Client Side Delay","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I navigate to the UI Testing Playground home page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I open the Client Side Delay page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I click the client side delay button","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the client side delay result should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end