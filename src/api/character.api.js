import { BASE_API_URL } from '@/utils/Constants';

class CharacterApi {
  constructor() {
    this.API_URL_CHARACTER = `${BASE_API_URL}/character`;
  }

  async getCharacters() {
    return fetch(this.API_URL_CHARACTER);
  }
}

export default new CharacterApi();
