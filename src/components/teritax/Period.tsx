
// 出力期間
import PeriodStartDateInput from "./PeriodStartDateInput";
import PeriodEndDateInput from "./PeriodEndDateInput";
import HistoryButton from "./HistoryButton";

const Period = () => {

    return (
        <>
        <h1>出力期間</h1>

            開始日
            {/*開始日入力コンポーネント*/}
            <PeriodStartDateInput />

            終了日
            {/*終了日入力コンポーネント*/}
            <PeriodEndDateInput />

            <HistoryButton />
        </>
    );
};

export default Period;
