import * as React from "react";
import axios from "axios";
import FileSaver from "file-saver"

const HistoryButton = () => {
    const urlAPI = "http://teritax.teritaris.net:8888/api/history/receive-receipt";
    const addresses = "NB5KBLPDGYOIXFCWBVCSFTWKNOW6AMBPBHUFLPI";
    const startDate = "";
    const endDate = "";

    // const urlAPI = "http://teritax.teritaris.net:8888/api/history/send-receipt?addresses=NB5KBLPDGYOIXFCWBVCSFTWKNOW6AMBPBHUFLPI&startDate=&endDate="

    // ボタンを押されたらgetしにいく関数定義
    const getHistory = () => {
        console.log(urlAPI)
        axios.get(urlAPI, {
            responseType: "blob",
            params: {
                addresses: addresses,
                startDate: startDate,
                endDate: endDate,
            }
        }).then((res) => {
            console.log("a")
            console.log(res)
            const blob = new Blob([res.data], { type: res.data.type })
            // const fileName = getFileName(res.headers['Content-disposition'])
            const fileName = "history.csv"
            FileSaver.saveAs(blob, fileName)
        }).catch((error) => {
            console.log(error);
        });

    }

    // TODO: res.headers['Content-disposition']がundefinedになる
    // const getFileName = (contentDisposition: string) => {
    //     console.log(contentDisposition)
    //     return decodeURI(contentDisposition).substring(
    //         contentDisposition.indexOf("''") + 2,
    //         contentDisposition.length,
    //     )
    // }

    return (
        <>
            <div>
                <button onClick={getHistory} style={{ cursor:'pointer' }}>
                げっと
                </button>
            </div>
        </>
    )
};

export default HistoryButton
