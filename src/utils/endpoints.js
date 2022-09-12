import { appConfig } from '../appConfig'

const { devServicesOrigin } = appConfig

export const carsPostEndpoint = carId => `${devServicesOrigin}/api/cars/${carId}`
export const brandsPostEndpoint = brandId => `${devServicesOrigin}/api/brands/${brandId}`
export const companiesPostEndpoint = companyId => `${devServicesOrigin}/api/companies/${companyId}`

export const carsGraphQLEndpoint = `${devServicesOrigin}/graphql`
