module.exports = function (app) {
  app.component("listFilterComponent", {
    bindings: {
      text: '=',
      color: '='
    },
    template: require('./listFilterComponent.html'),
    controller: listFilterCtrl

  });

  /**
   * Конструктор контроллера добавления новых элементов в массив.
   * 
   * @constructor
   * @param {object} languageService - angular сервис работы с переводом текста
   */
  function listFilterCtrl() {
    this.colors = [
      {
        label: "green",
        text: "green"
      },
      {
        label: "yellow",
        text: "yellow"
      },
      {
        label: "red",
        text: "red"
      }];
      
     /**
     * Вызывает функцию изменения цвета в фильтре.
     */
    this.clear = () => {
      this.text = "";
      this.color = "";
      this.currentText = "";
      this.currentColor = "";
    }

     /**
     * Вызывает функцию изменения цвета в фильтре.
     */
    this.search = () => {
      this.text = this.currentText;
      this.color = this.currentColor.text;
    }

  }
};