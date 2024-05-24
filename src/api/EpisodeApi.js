import { BASE_API_URL } from '@/utils/constants';
import { fetchDataEpisode } from '@/helpers/apiHelper';

class EpisodeApi {
  constructor() {
    this.API_URL_CHARACTER = `${BASE_API_URL}/episode`;
  }

  async getEpisodeByUrl(url) {
    return fetchDataEpisode(url);
  }
}

export default new EpisodeApi();
