import * as React from 'react';
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { taxAddressListState } from "../states/taxAddressState";


let id = 1;
const getId = () => {
    return id++;
}

const Address = () => {
    const [address, setAddress] = useState('')
    // atomから初期値を読み込む。useRecoilStateは更新も可能。
    const setAddressList = useSetRecoilState(taxAddressListState);

    // 追加ボタン押されたらtextの値がeに入る
    // リアルタイムで入れるやつrouterのチュートリアルでやってたきがす
    const handleChange = (event: any) => {
        setAddress(event.target.value)
    }

    const addAddress = () => {
        setAddressList((oldAddressList) => [
            ...oldAddressList,
            {
                id: getId(),
                address: address,
            },
        ]);
        setAddress('')
    }


    return (
        <>
            <h2>CSV出力対象アカウント</h2>
            <h3>アドレス</h3>
            <div style={{ margin: '1em 0' }}>
                <input type="text" style={{ width: '200px' }} value={address} onChange={handleChange} />
                <button onClick={addAddress}>追加</button>
            </div>
        </>
    )
}

export default Address;
