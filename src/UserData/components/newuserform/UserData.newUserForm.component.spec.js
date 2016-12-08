describe('newUserForm componet', function() {
	var scope, form, $httpBackend;
	beforeEach(module('UserData'));
	beforeEach(module('my.templates'));
	beforeEach(inject(function($rootScope, $componentController, $templateCache, $compile) {
		scope = $rootScope.$new();
		var controller = $componentController('newUserForm', {
			UserCardService: {},
			$state: {},
			$scope: scope
		});
		  // templateHtml = $templateCache.get('src/UserData/components/newuserform/newUserForm.html');
		  var formElem = angular.element('<new-user-form></new-user-form>');
		  $compile(formElem)(scope);
		  scope.$apply();
		  var form = formElem.find('form');

	}));
	it('should have the controller defined', function(controller) {
		expect(controller).toBeDefined();
	})
	it('should not allow invalid input', function(controller) {
		expect(form).toBeDefined();
		expect(controller.userForm).toBeDefined();
		expect(controller.userForm.$valid).toBeTruthy();
		form.email.$setViewValue('aaa');
		expect(controller.userForm.email.$valid).toBeFalsy();
	})
})