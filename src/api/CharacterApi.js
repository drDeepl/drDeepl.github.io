import { BASE_API_URL } from '@/utils/constants';
import { fetcDataCharacters } from '@/helpers/apiHelper';

class CharacterApi {
  constructor() {
    this.API_URL_CHARACTER = `${BASE_API_URL}/character`;
  }

  async getCharacters() {
    // const response = await fetch(this.API_URL_CHARACTER);
    return fetcDataCharacters(this.API_URL_CHARACTER);
  }

  async getCharactersByFilter(data) {
    return fetcDataCharacters(`${this.API_URL_CHARACTER}?name=${data.name}&status=${data.status}`);
  }

  async getPageByUrl(url) {
    // const response = await responseCharactersWrapper(response);
    return fetcDataCharacters(url);
  }
}

export default new CharacterApi();
