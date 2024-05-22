class FilterCharacterDataModel {
  constructor() {
    this.labels = {
      name: 'имя персонажа',
      status: 'статус персонажа'
    };
    this.data = {
      name: '',
      status: ''
    };

    this.options = ['Alive', 'Dead', 'unknown', 'all'];
  }
}

export default FilterCharacterDataModel;
