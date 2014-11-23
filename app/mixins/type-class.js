import Ember from 'ember';

export default Ember.Mixin.create({
  classTypePrefix: Ember.required(String),
  classNameBindings: ['typeClass'],
  type: 'default',
  typeClass: Ember.computed('type', function() {
    var pref, type;
    type = this.get('type');
    if (type == null) {
      type = 'default';
    }
    pref = this.get('classTypePrefix');
    return "" + pref + "-" + type;
  }).cacheable()
});
