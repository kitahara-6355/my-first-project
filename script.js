document.addEventListener('DOMContentLoaded', () => {
    const memoInput = document.getElementById('memo-input');
    const addMemoBtn = document.getElementById('add-memo-btn');
    const memoList = document.getElementById('memo-list');

    // ローカルストレージからメモを読み込む
    let memos = JSON.parse(localStorage.getItem('memos')) || [];

    // メモをローカルストレージに保存する関数
    const saveMemos = () => {
        localStorage.setItem('memos', JSON.stringify(memos));
    };

    // メモ一覧を描画する関数
    const renderMemos = () => {
        memoList.innerHTML = '';
        memos.forEach(memoText => {
            const li = document.createElement('li');
            li.textContent = memoText;
            memoList.appendChild(li);
        });
    };

    // メモを追加する関数
    const addMemo = () => {
        const memoText = memoInput.value.trim();
        if (memoText) {
            memos.push(memoText);
            saveMemos();
            renderMemos();
            memoInput.value = '';
        }
    };

    // イベントリスナーを設定
    addMemoBtn.addEventListener('click', addMemo);

    // 初期描画
    renderMemos();
});
