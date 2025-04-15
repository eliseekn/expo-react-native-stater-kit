import { FetchOptions, FetchResponse } from "../interfaces"

export const API_ENDPOINT = 'http://10.0.2.2'

export async function fetchData<T>(url: string, options: FetchOptions = {}): Promise<FetchResponse<T>> {
  const { method = 'GET', body, headers = {} } = options

  const response: FetchResponse<T> = {
    data: null,
    loading: true,
    error: '',
    status: null,
  }

  try {
    const res = await fetch(API_ENDPOINT + '/' + url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json; charset=UTF-8',
        ...headers,
      },
      body: body
    })

    response.status = res.status
    response.data = await res.json()
  } catch (e) {
    response.error = e instanceof Error ? e.message : String(e)
  } finally {
    response.loading = false
  }

  return response
}
