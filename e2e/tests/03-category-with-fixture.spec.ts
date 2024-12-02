import PageManager from '../page-objects/page-manager';
import { basic } from '../fixtures/01-basic';
import { automatic } from '../fixtures/02-automatic';
import { manager } from '../fixtures/03-page-manager';
import { sequential } from '../fixtures/04-sequential-fixtures';
import { withParam } from '../fixtures/04-with-param';

basic('Go to Categories page with basic fixture', async ({ page, navigateTo }) => {
  const pm = new PageManager(page)

  //CATEGORIES
  await pm.fromCategoriesPage().checkCategoriesPage();
  await pm.fromCategoriesPage().goToChildCategory()
});


//remove fixture param
automatic('Go to Categories page with automatic fixture', async ({ page }) => {
  const pm = new PageManager(page)

  //CATEGORIES
  await pm.fromCategoriesPage().checkCategoriesPage();
  await pm.fromCategoriesPage().goToChildCategory()
});


manager('Go to Categories page with page manager fixture', async ({ pm }) => {

  //CATEGORIES
  await pm.fromCategoriesPage().checkCategoriesPage();
  await pm.fromCategoriesPage().goToChildCategory()
});

sequential('Go to Categories page with sequential fixture', async ({ pm }) => {

  //CATEGORIES
  await pm.fromCategoriesPage().checkCategoriesPage();
  await pm.fromCategoriesPage().goToChildCategory()
});

withParam.use({myParam: 'myParamValue'});
withParam('Go to Categories page with fixture\'s param', async ({ pm }) => {

  //CATEGORIES
  await pm.fromCategoriesPage().checkCategoriesPage();
  await pm.fromCategoriesPage().goToChildCategory()
});

