// Generated from: features/alerts.feature
import { test } from "playwright-bdd";

test.describe('Alerts', () => {

  test('Handle alert, confirm, and prompt dialogs', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the UI Testing Playground home page', null, { page }); 
    await When('I open the Alerts page', null, { page }); 
    await And('I handle the alert dialog', null, { page }); 
    await And('I accept the confirm dialog', null, { page }); 
    await And('I answer the prompt dialog with "dogs"', null, { page }); 
    await Then('the Alerts dialogs should be handled successfully', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/alerts.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I navigate to the UI Testing Playground home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I open the Alerts page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I handle the alert dialog","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I accept the confirm dialog","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I answer the prompt dialog with \"dogs\"","stepMatchArguments":[{"group":{"start":32,"value":"\"dogs\"","children":[{"start":33,"value":"dogs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the Alerts dialogs should be handled successfully","stepMatchArguments":[]}]},
]; // bdd-data-end