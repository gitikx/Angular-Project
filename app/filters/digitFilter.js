
module.exports = function(app){
    app.filter("digitFilter", digitFilter);
function digitFilter() {
    return function (input) {
        var string = input.replace(/[^\d]/gi, '');
        if(string == ''){
            return 'This string contains only symbols';
        }
        return string;
    }
};
}