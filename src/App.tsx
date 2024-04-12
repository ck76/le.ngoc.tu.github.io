import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 40 + 20;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      // "No",
      "Hôm nay là sinh nhật của một người rất là dễ thương mày biết chứ ?",
      "đó chắc chắn không phải là mày, điều này chắc mày cũng biết rồi ha ?",
      "vì mày suốt ngày chê mình là vừa mập vừa xấu đéo ma nào thèm yêu mà. Mày còn nhớ chứ? ",
      "tao chưa bao giờ công nhận điều đó, đối với tao mày là một Khánh Linh thông minh, xinh đẹp …emmm, chắc mình tao nói vậy thôi đúng không:)))",
      "Nãy giờ giỡn giờ nghiêm túc nè🤣 Hép bi bớt đây, chờ vài tháng nữa về tao tổ chức sn bù cho kkk. Hai năm mày còn chờ được huống gì còn mấy tháng nữa ha!",
      "Tưởng tao quên luôn sinh nhật mày rồi chứ gì? ",
      "Chắc nghĩ tao qua Nhật sướng quá quên bạn rồi đúng không?",
      "Tại tao vừa làm vừa học, một ngày ngủ có mấy tiếng luôn, không có time nhắn tin chát chít nhiều như trước hoyy Không được buồn bạn nghe chưa!!!",
      // "I am going to die",
      // "Yep im dead",
      // "ok ur talking to nathan's ghost",
      // "please babe",
      // ":((((",
      // "PRETTY PLEASE",
      // "Estoy muerto",
      // "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! Happy Birthday 🎉🎁🎈!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          {/*<h1 className="my-4 text-4xl">Hôm nay là sinh nhật của một người rất là dễ thương mày biết chứ ?</h1>*/}
          <h1 className="my-4 text-4xl">{getNoButtonText()}</h1>

          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
}
