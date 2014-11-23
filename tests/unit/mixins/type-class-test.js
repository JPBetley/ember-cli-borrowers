import Ember from 'ember';
import TypeClassMixin from 'borrowers/mixins/type-class';

module('TypeClassMixin');

// Replace this with your real tests.
test('it works', function() {
  var TypeClassObject = Ember.Object.extend(TypeClassMixin);
  var subject = TypeClassObject.create();
  ok(subject);
});
