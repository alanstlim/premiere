import { TMDB_TOKEN, BASE_URL_TMDB } from '@env';

export async function tmdbFetch<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH',
  params?: Record<string, any>,
): Promise<T> {
  let url = `${BASE_URL_TMDB}${endpoint}`;

  if (params) {
    const queryString = Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join('&');

    url += `?${queryString}`;
  }

  const response = await fetch(url.toString(), {
    method,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }

  return response.json();
}
