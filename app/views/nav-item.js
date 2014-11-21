import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'li',
  classNameBindings: ['active'],

  active: function() {
    return this.get('childViews.firstObject.active');
  }.property()
});
