import { atom } from 'recoil';
import taxAddress from "../taxAddress";
import Period from "../teritax/Period";


// コンポーネントで扱う初期値（グローバルで他コンポーネントからも参照できる？atom()の中）
// アドレス入力欄初期値
// 初期は入力欄1つ
export const taxAddressListState = atom({
    key: 'taxAddressListState', // 一意にする必要ある
    default: [
        {
            id: 0,
            address: 'アドレス',
        },
    ],
});

// type PeriodItem = {
//     startDate?: string
//     endDate?: string
// }
//
// type TaxOutputPeriodState = {
//     OutputPeriod: PeriodItem[],
// }
//
// export const taxOutputPeriodState = atom<TaxOutputPeriodState>({
//     key: 'taxOutputPeriodState', // 一意にする必要ある
//     default: {
//         OutputPeriod[]
//     },
// });

// type PeriodItem = {
//     startDate?: string
//     endDate?: string
// }
// type PeriodState = {
//     period: PeriodItem
// }
export const taxOutputPeriodStartState = atom<string>({
    key: "taxOutputPeriodStartState",
    default: ''
})
export const taxOutputPeriodEndState = atom<string>({
    key: "taxOutputPeriodEndState",
    default: ''
})
