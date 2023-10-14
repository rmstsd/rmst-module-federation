import { mount } from 'cart_n/index'

import 'products_n/index'

import { faker } from '@faker-js/faker'

faker.animal.bird()

mount(document.querySelector('.cart'))
