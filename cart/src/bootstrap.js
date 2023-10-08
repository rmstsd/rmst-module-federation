import { faker } from '@faker-js/faker'

function mount(el) {
  console.log('cart')

  el.innerHTML = 'cart - ' + faker.animal.bear()
}

export { mount }
