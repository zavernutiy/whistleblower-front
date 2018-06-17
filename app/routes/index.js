import Route from '@ember/routing/route';

export default Route.extend({
  api: Ember.inject.service('whistleblowerapi'),

  model() {
    return this.get('api').getActivities();
  }
});
