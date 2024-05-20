import CharacterApi from '@/api/character.api';
export class CharacterService {
  async getCharacters() {
    const result = {
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      },
      data: []
    };
    const response = await CharacterApi.getCharacters();
    if (response.status === 200) {
      const body = await response.json();
      result.info = body.info;
      result.data = body.results;
    }

    return result;
  }
}

export default new CharacterService();
