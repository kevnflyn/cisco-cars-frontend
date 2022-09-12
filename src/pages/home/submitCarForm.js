import { getRequest, postRequest } from '../../utils/fetch'
import { carsGraphQLEndpoint, carsPostEndpoint, brandsPostEndpoint, companiesPostEndpoint } from '../../utils/endpoints'

const requestWithREST = async carId => {
  const { payload: car } = await getRequest(carsPostEndpoint(carId))
  const { payload: brand } = await getRequest(brandsPostEndpoint(car.brandId))
  const { payload: company } = await getRequest(companiesPostEndpoint(brand.companyId))
  return {
    ...car,
    brand,
    company
  }
}

const requestWithGraphQL = async carId => {
  const { data: { getCar } } = await postRequest(carsGraphQLEndpoint, {
    query: `
      {
        getCar(id: ${carId}) {
          model,
          brand {
            name
          },
          company {
            name
          }
        }
      }
    `
  })
  return getCar
}

const requestCars = (carId, apiType) => {
  if (apiType === 'restful') {
    return requestWithREST(carId)
  }
  if (apiType === 'graphql') {
    return requestWithGraphQL(carId)
  }
  throw new Error('Invalid value set on apiType')
}

export const submitCarForm = async (form, setResults, setErrors) => {
  try {
    const { carId, apiType } = form.getFieldsValue()
    const carData = await requestCars(carId, apiType)
    setResults(carData)
    setErrors(null)
  } catch (error) {
    const caughtError = error.errors || error
    console.error(caughtError)
    setErrors(caughtError)
    setResults(null)
  }
}
