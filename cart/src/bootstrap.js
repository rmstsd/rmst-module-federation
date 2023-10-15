import { faker } from '@faker-js/faker'

console.log('cart app')

function mount(el) {
  el.innerHTML = 'cart - ' + faker.animal.bear()
}

export { mount }
