(function() {
	'use strict';
	angular.module('MailBox')
	.component('sentItems', {
		templateUrl: 'src/MailBox/components/sentitems/sentItems.html',
		controller: SentItemsComponentController
	});

	SentItemsComponentController.$inject = ['MailBoxService','$scope'];
	function SentItemsComponentController(MailBoxService, $scope) {
		var ctrl = this;

		ctrl.data = MailBoxService.data;
		ctrl.checkAll = checkAll;
		ctrl.getSelectedSentItems = getSelectedSentItems;
		ctrl.selectAll = false;
		ctrl.removeMultiple = removeMultiple;

		function checkAll () {
			this.data.sent.forEach((item)=> {
				item.selected = this.selectAll;
			})
		};
		
		function getSelectedSentItems() {
			return MailBoxService.getSelectedSentItems()
		};

		function removeMultiple() {
			confirm("Are you sure you want to delete selected items?");
			this.getSelectedSentItems().forEach(function(mail){
				MailBoxService.removeMail(mail._id)
			});
			ctrl.selectAll = false;
		};
	}
})();