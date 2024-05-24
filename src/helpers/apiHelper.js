import { charactersResultDefault, defaultInfoPages, episodeResultDefault } from '@/utils/constants';
export async function fetcDataCharacters(url, data) {
  try {
    const response = await fetch(url, data);

    if (!response.ok) {
      return { info: defaultInfoPages, data: [] };
    }
    const result = Object.assign(charactersResultDefault);
    const body = await response.json();
    result.info = body.info;
    result.data = body.results;
    return result;
  } catch (error) {
    return charactersResultDefault;
  }
}

export async function fetchDataEpisode(url, data) {
  try {
    const response = await fetch(url, data);
    if (!response.ok) {
      return episodeResultDefault;
    } else {
      const body = await response.json();
      return body;
    }
  } catch (error) {
    console.error(error);
    return episodeResultDefault;
  }
}
