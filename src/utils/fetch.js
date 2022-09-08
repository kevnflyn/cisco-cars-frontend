const errorMessage = async response => {
  const { statusText, status, url } = response
  const { error } = await response.json()
  return {
    error,
    statusText,
    status,
    url
  }
}

const handleResponse = async (response, dataType) => {
  try {
    if (response.ok) {
      if (!dataType) return undefined

      if (dataType === 'application/json') {
        return await response.json()
      }

      return undefined
    }
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }

  throw await errorMessage(response)
}

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'cors' // no-cors, *cors, same-origin
}

export const getRequest = async (url, options = defaultOptions) => (
  handleResponse(
    await fetch(url, { ...options, method: 'GET' }),
    options.headers['Content-Type']
  )
)
