import { faker } from '@faker-js/faker'

console.log('products app')

function mount(el) {
  const randomName = faker.person.fullName()

  el.innerHTML = 'products - ' + randomName
}

export { mount }
