import { useRecoilState} from "recoil";
import { taxAddressListState} from "../states/taxAddressState";

const AddressItem = ({ item }: any) => {
    const [addressList, setAddressList] = useRecoilState(taxAddressListState);

    // 項目を削除する
    const deleteItem = () => {
        console.log('delete');

        // findIndex関数で配列番号を取得
        const index = addressList.findIndex((addressItem) => addressItem.id === item.id);
        // 0から配列の番号までの要素と、配列の番号+1から最後の要素までを取得してdelete対象以外の要素を配列に詰め直す
        const newTodoList = [
            ...addressList.slice(0, index),
            ...addressList.slice(index + 1),
        ];
        setAddressList(newTodoList);
    };

    return (
        <div>
            {item.address}
            <span onClick={deleteItem} style={{ cursor:'pointer' }}>
                [削除]
            </span>
        </div>
    );
}

export default AddressItem;
