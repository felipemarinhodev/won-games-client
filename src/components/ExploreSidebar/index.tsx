import Radio from 'components/Radio'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'

import * as S from './styles'

export type ItemProps = {
  name: string
  title: string
  type: string
  fields: Field[]
}

type Field = {
  name: string
  label: string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
}

const ExploreSidebar = ({ items }: ExploreSidebarProps) => (
  <S.Wrapper>
    {items?.map((item) => (
      <div key={item.name}>
        <Heading lineBottom lineColor="secondary" size="small">
          {item.title}
        </Heading>
        {item.type === 'checkbox' &&
          item.fields.map((field) => (
            <Checkbox
              key={field.name}
              name={field.name}
              label={field.label}
              labelFor={field.name}
            />
          ))}

        {item.type === 'radio' &&
          item.fields.map((field) => (
            <Radio
              key={field.name}
              id={field.name}
              name={item.name}
              label={field.label}
              labelFor={field.name}
              value={field.name}
            />
          ))}
      </div>
    ))}

    <Button fullWidth size="medium">
      Filter
    </Button>
  </S.Wrapper>
)

export default ExploreSidebar
