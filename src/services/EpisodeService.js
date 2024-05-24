import EpisodeApi from '@/api/EpisodeApi';

class EpisodeService {
  async getEpisodeNameByUrl(url) {
    const result = await EpisodeApi.getEpisodeByUrl(url);
    return result.name;
  }
}

export default new EpisodeService();
