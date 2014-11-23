import Ember from 'ember';
import TypeClass from 'borrowers/mixins/type-class';

export default Ember.Component.extend(TypeClass, {
  classNames: ['alert'],
  classNameBindings: ['fade', 'fade:in'],
  classTypePrefix: 'alert',
  attributeBindings: ['data-timeout'],
  dismissAfter: 0,
  closedParam: null,

  didInsertElement: function () {
    var _this = this;
    if (_this.dismissAfter > 0) {
      Ember.run.later(_this, 'dismiss', _this.dismissAfter);
    }

    Ember.$("#" + this.elementId).bind('closed.bs.alert', function() {
      _this.sendAction('closed', _this.get('closedParam'));
      return _this.destroy();
    });

    return Ember.$("#" + this.elementId).bind('close.bs.alert', function() {
      return _this.sendAction('close', _this.get('closedParam'));
    });
  },

  dismiss: function() {
    return Ember.$("#" + this.elementId).alert('close');
  }
});
