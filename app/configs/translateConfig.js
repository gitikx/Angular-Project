module.exports = function (app) {
    app.config(function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: './languages/',
            suffix: '.json'
        }).preferredLanguage('ru').useSanitizeValueStrategy(null);
    })
}