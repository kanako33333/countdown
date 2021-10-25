// 要素
const year = document.getElementById('year');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// 今年
const currentYear = new Date().getFullYear();
// 来年
const nextYear = currentYear + 1;
// 来年の1月1日00:00:00を取得
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

// nextYearをDOMに追加
year.innerText = nextYear + "まで";


// カウントダウンの関数
function updateCountdown() {
    // 現在時刻情報
    const currentTime = new Date();
    // 現在の時間と新年の差を計算 ミリ秒
    const diff = newYearTime - currentTime;

    // 現在から新年までの日数
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    // 時間
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    // 分
    const m = Math.floor(diff / 1000 / 60) % 60;
    // 秒
    const s = Math.floor(diff / 1000) % 60;

    // 取得した時間をDOMに追加
    days.innerText = d;
    hours.innerText = h < 10 ? '0' + h : h;
    minutes.innerText = m < 10 ? '0' + m : m;
    seconds.innerText = s < 10 ? '0' + s : s;
    }

// ロード時、関数を実行
updateCountdown();
// 1秒ごとに関数を実行
setInterval(updateCountdown, 1000);