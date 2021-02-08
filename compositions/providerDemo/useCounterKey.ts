import { InjectionKey } from '@vue/composition-api'
import { CounterStore } from '@/compositions/providerDemo/useCounter'

const CounterKey: InjectionKey<CounterStore> = Symbol('CounterStore')
export default CounterKey
