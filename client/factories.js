angular.module('Caterpillars.factories', [])
.factory('Caterpillars', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/caterpillars/:id', { id: '@id' }, {
        'update': { method: 'PUT' }
    });
}])
.factory('Families', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/families/:id', { id: '@id' }, {
        'update': { method: 'PUT' }
    });
}])
.factory('LAFamilies', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/families/noc/:id', { id: '@id' }, {
        'update': { method: 'PUT' }
    });
}])
.factory('CRFamilies', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/families/lim/:id', { id: '@id' }, {
        'update': { method: 'PUT' }
    });
}])