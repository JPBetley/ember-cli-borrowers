import FriendsBaseController from './base';

export default FriendsBaseController.extend({

  actions: {
    cancel: function() {
      this.model.deleteRecord();
      this.transitionToRoute('friends');
      return false;
    }
  }

});
