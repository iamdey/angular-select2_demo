angular.module( 'ngBoilerplate.select2', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'pascalprecht.translate'
])

.config(function config( $stateProvider, $translateProvider ) {
  $stateProvider.state( 'select2', {
    url: '/select2',
    views: {
      "main": {
        controller: 'Select2Ctrl',
        templateUrl: 'select2/select2.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
  $translateProvider.translations('en', {
      HELLO_WORLD: "Hello world",
      SELECT2_PLACEHOLDER: "Choose (custom translation)",
      SELECT2_NO_MATCH: "No matches (custom translation)"
  }).preferredLanguage('en');
})

.controller( 'Select2Ctrl', function Select2Ctrl( $scope, $translate ) {
    $scope.select2Model = {};
    $scope.select2ModelMultiple = {};

    $scope.select2Choices = [
        { id: 1, text: "AAA" },
        { id: 2, text: "AAABBB" },
        { id: 3, text: "AAABBBccc" }
    ];

    $scope.select2OptionsSimple = {
        width: '210px',
        placeholder: $translate('SELECT2_PLACEHOLDER'),
        formatNoMatches: $translate('SELECT2_NO_MATCH')
    };

    $scope.changeOptions = function() {
        $scope.select2OptionsSimple.width = '400px';
        $scope.select2OptionsSimple.formatNoMatches = "no matches (updated)";
    };

    $scope.select2Options = {
        width: '210px',
        data: $scope.select2Choices,
        placeholder: $translate('SELECT2_PLACEHOLDER'),
        formatNoMatches: $translate('SELECT2_NO_MATCH')
    };

    $scope.select2OptionsMultiple = {
        width: '210px',
        multiple: true,
        data: $scope.select2Choices,
        placeholder: $translate('SELECT2_PLACEHOLDER'),
        formatNoMatches: $translate('SELECT2_NO_MATCH')
    };
})

;
