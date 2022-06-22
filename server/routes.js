const Router = require('express');
const router = new Router;

//controllers
const ArticleController = require('./controllers/ArticleController');
const GlossaryController = require('./controllers/GlossaryController');
const SimplePageController = require('./controllers/SimplePageController');
const CommonController = require('./controllers/CommonController');

const CategoryController = new CommonController('Category');
const TagsController = new CommonController('Tag');
const LevelController = new CommonController('Level');
const SettingsController = new CommonController('Settings');
const FooterController = new CommonController('Footer');


//articles
router.get('/articles',  ArticleController.index);
router.get('/articles/:slug',  ArticleController.findOne);

//glossaries
router.get('/glossaries',  GlossaryController.index);
router.get('/glossaries-total',  GlossaryController.total);
router.get('/glossaries/:slug',  GlossaryController.findOne);


//categories
router.get('/categories',  CategoryController.index);

//tags
router.get('/tags',  TagsController.index);

//levels
router.get('/levels',  LevelController.index);

//simple page
router.get('/pages/:slug',  SimplePageController.findOne);

//settings
router.get('/settings',  SettingsController.findFirst);

//footer
router.get('/footer',  FooterController.index);

module.exports = router;   