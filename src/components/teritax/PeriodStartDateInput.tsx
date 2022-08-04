import * as React from "react";
import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {taxOutputPeriodStartState} from "../states/taxAddressState";

// TODO: propsで開始か終了判断することで同一コンポーネントでいけないか？
const PeriodStartDateInput = () => {

    const [period, setPeriod] = useState('')
    // atomから初期値を読み込む。useRecoilStateは更新も可能。
    const setOutputPeriodStartState = useSetRecoilState(taxOutputPeriodStartState);

    // リアルタイムで入れるやつrouterのチュートリアルでやってたきがす
    // TODO: typeから開始か終了を判断してatomの当該項目にセットする
    const handleChange = (event: any) => {
        setPeriod(event.target.value)
        setOutputPeriodStartState(event.target.value)
    }

    return (
        <>
            <div style={{ margin: '1em 0' }}>
                <input type="text" style={{ width: '200px' }} value={period} onChange={handleChange} />
            </div>
        </>
    );
};

export default PeriodStartDateInput;
