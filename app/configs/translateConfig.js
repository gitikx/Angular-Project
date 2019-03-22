module.exports = function (app) {
    app.config(($translateProvider) => {
        $translateProvider.useStaticFilesLoader({
            prefix: './languages/',
            suffix: '.json'
        }).preferredLanguage('ru').useSanitizeValueStrategy(null);
    })
}