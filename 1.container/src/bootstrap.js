import { mount as cartMount } from 'cart_n/index'

import { mount as productsMount } from 'products_n/index'

import { faker } from '@faker-js/faker'
faker.animal.bird()

cartMount(document.querySelector('.cart'))
productsMount(document.querySelector('.products'))

console.log(window)
