import { charactersResultDefault, defaultInfoPages } from '@/utils/constants';
export async function fetcDataCharacters(url, data) {
  try {
    const response = await fetch(url, data);
    console.log(response);
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
