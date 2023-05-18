import React from 'react'
import t from 'prop-types'
import { Dimensions } from 'react-native'

import Ripple from 'C:/Users/84373/Videos/Nodejs/ReactNative2023/rmt/src/components/Ripple'

import { Container, Gradient, Name } from './styled'

const data = [
  {
    id: 1,
    name: 'Television',
    gradient: ['#1e3c72', '#2a5298']
  },
  {
    id: 2,
    name: 'Ar conditioner',
    gradient: ['#eb3349', '#f45c43']
  },
  {
    id: 3,
    name: 'Fan',
    gradient: ['#48b1bf', '#06beb6']
  },
  {
    id: 4,
    name: 'Smart Box',
    gradient: ['#29323c', '#485563']
  },
  {
    id: 5,
    name: 'Receptor A/V',
    gradient: ['#ff758c', '#ff7eb3']
  }
]

const offset = 30
const width = (Dimensions.get('window').width / 2) - offset

export default function List ({ handleNavigate }) {
  return (
    <Container
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => {
        const { gradient, name } = item

        return (
          <Ripple
            onPress={handleNavigate}
            width={width}
            height={200}
            radius={16}
            marginBottom={20}
          >
            <Gradient gradient={gradient}>
              <Name>{name}</Name>
            </Gradient>
          </Ripple>
        )
      }}
    />
  )
}

List.propTypes = {
  handleNavigate: t.func.isRequired
}