import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  LOG_TRANSITIONS: true
});

//App.token = null;

loadInitializers(App, config.modulePrefix);

export default App;