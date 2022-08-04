import Address from "./Address";
import AddressItem from "./AddressItem"
import { taxAddressListState } from "../states/taxAddressState"
import {useRecoilValue} from "recoil";
import Period from "./Period";

const TeriTax = () => {

    const addressList = useRecoilValue(taxAddressListState);

    return (
        <>
            <h1>TeriTax予定地</h1>

            <Address />

            {addressList.map((item) => (
                <AddressItem key={item.id} item={item}/>
            ))}


            {/*出力期間*/}
            <Period />

        </>
    );
}

export default TeriTax;

export interface TeriTax {
}
