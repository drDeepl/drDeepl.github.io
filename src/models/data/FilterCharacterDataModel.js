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

    this.options = ['alive', 'dead', 'unknown', 'all'];
  }
}

export default FilterCharacterDataModel;
