Package.describe({
  name: 'aramk:tag-it',
  summary: 'A simple and configurable tag editing widget with autocomplete support.',
  version: '2.0.0'
});

Package.onUse(function (api) {
  api.use([
    'jquery',
    'templating',
    'mizzao:jquery-ui@1.11.4'
  ]);

  api.addFiles([
    'js/tag-it.js',
    'css/jquery.tagit.css',
    'css/tagit.ui-zendesk.css'
  ], 'client');

});
