module.exports = function (app) {
  app.component("listFilterComponent", {
    bindings: {
      onChange: '&'
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
        label: "",
        text: ""
      },
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
    this.color = this.colors[0];

    /**
    * Вызывает функцию сброса параметров фильтра.
    */
    this.clear = () => {
      this.text = "";
      this.color = this.colors[0];
      this.search();
    }

    /**
    * Вызывает функцию изменения параметров фильтра.
    */
    this.search = () => {
      this.onChange({ text: this.text, color: this.color })
    }

  }
};