import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('whistle-blowers');
  this.route('meetups');
  this.route('callback');
});

export default Router;
