import { charactersResult } from '@/utils/constants';
export const responseCharactersWrapper = async (response) => {
  const result = charactersResult;
  if (response.status === 200) {
    const body = await response.json();
    result.info = body.info;
    result.data = body.results;
  }
  return result;
};
