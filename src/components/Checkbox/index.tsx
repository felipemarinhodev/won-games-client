import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
}

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) => (
  <S.Wrapper>
    <S.Input type="checkbox" id={labelFor} />
    {!!label && (
      <S.Label
        htmlFor={labelFor}
        labelColor={labelColor}
        data-testid="label-checkbox"
      >
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)

export default Checkbox
