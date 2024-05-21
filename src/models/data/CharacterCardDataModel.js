export class CharacterCardDataModel {
  constructor(characterDataResponse) {
    this.imgUrl = characterDataResponse.image;
    this.nameCharacter = characterDataResponse.name;
    this.statusCharacter = characterDataResponse.status;
    this.lastKnownLocation = characterDataResponse.location.name;
    this.firstSeenIn = characterDataResponse.origin.name;
  }
}

export default CharacterCardDataModel;
