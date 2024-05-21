export class CharacterCardDataModel {
  static labels = {
    nameCharacter: 'имя персонажа',
    statusCharacter: 'статус',
    species: 'вид',
    lastKnownLocation: 'Последнее известное местонахождения',
    firstSeenIn: 'Впервые увиден в'
  };
  constructor(characterDataResponse) {
    this.imgUrl = characterDataResponse.image;
    this.nameCharacter = characterDataResponse.name;
    this.statusCharacter = characterDataResponse.status;
    this.species = characterDataResponse.species;
    this.lastKnownLocation = characterDataResponse.location.name;
    this.firstSeenIn = characterDataResponse.origin.name;
  }
}

export default CharacterCardDataModel;
