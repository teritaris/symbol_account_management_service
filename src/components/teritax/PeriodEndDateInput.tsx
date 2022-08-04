import * as React from "react";
import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {taxOutputPeriodEndState} from "../states/taxAddressState";

// TODO: propsで開始か終了判断することで同一コンポーネントでいけないか？
const PeriodEndDateInput = () => {

    const [period, setPeriod] = useState('')
    // atomから初期値を読み込む。useRecoilStateは更新も可能。
    const setOutputPeriodEndState = useSetRecoilState(taxOutputPeriodEndState);

    // リアルタイムで入れるやつrouterのチュートリアルでやってたきがす
    // TODO: typeから開始か終了を判断してatomの当該項目にセットする
    const handleChange = (event: any) => {
        setPeriod(event.target.value)
        setOutputPeriodEndState(event.target.value)
    }

    return (
        <>
            <div style={{ margin: '1em 0' }}>
                <input type="text" style={{ width: '200px' }} value={period} onChange={handleChange} />
            </div>
        </>
    );
};

export default PeriodEndDateInput;
