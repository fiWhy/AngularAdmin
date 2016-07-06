import 'app';
import 'angular-mocks';

describe('Testing my authorize service', () => {
   beforeEach(angular.mock.module('app.core'));
   var Authorize;
   it('Should test authorize service test method', inject((_AuthorizeService_) => {
       Authorize = _AuthorizeService_;
       console.log(Authorize.getCurrentUser());
       expect(Authorize.getCurrentUser()).toBe(undefined); 
   }));
});