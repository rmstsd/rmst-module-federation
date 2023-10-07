import { faker } from '@faker-js/faker'

console.log('products')
const randomName = faker.person.fullName()

document.querySelector('.products').innerHTML = randomName

export default randomName
