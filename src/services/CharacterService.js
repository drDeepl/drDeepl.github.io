import CharacterApi from '@/api/CharacterApi';
import { responseCharactersWrapper } from '@/helpers/apiHelper';
export class CharacterService {
  cunstructor() {
    this.characterApi = CharacterApi;
  }
  async getCharacters() {
    const response = await CharacterApi.getCharacters();
    const result = await responseCharactersWrapper(response);
    return result;
  }

  async getCharactersByFilter(data) {
    const response = await CharacterApi.getCharactersByFilter(data);
    const result = await responseCharactersWrapper(response);
    return result;
  }

  async getPageByNumber(pageNumber, href) {
    const url = new URL(href);

    url.searchParams.set('page', pageNumber);
    const response = await CharacterApi.getPageByUrl(href);
    const result = await responseCharactersWrapper(response);
    return result;
  }
}

export default new CharacterService();
