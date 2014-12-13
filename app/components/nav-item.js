import Ember from 'ember';

export default Ember.Component.extend({
  text: '',
  route: '',

	tagName: 'li',
  classNameBindings: ['active'],

  active: Ember.computed('childViews.firstObject.active', function() {
    return this.get('childViews.firstObject.active');
  })
});
