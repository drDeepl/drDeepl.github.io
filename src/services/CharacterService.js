import CharacterApi from '@/api/CharacterApi';
import { responseCharactersWrapper } from '@/helpers/apiHelper';
export class CharacterService {
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

  async getPageByUrl(url) {
    const response = await CharacterApi.getPageByUrl(url);
    const result = await responseCharactersWrapper(response);
    return result;
  }
}

export default new CharacterService();
