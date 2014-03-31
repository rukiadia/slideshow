/*
  スライドショー
  「左右」の矢印ボタンを押すことで中央に表示される画像を切り替える
*/
window.onload = function() {

    /* 変数の定義 */

    // 画像のリスト
    var photoList = [
    	{ src: 'photo/01.jpg', title: '1番目'},
    	{ src: 'photo/02.jpg', title: '2番目'},
    	{ src: 'photo/03.jpg', title: '3番目'},
        { src: 'photo/04.jpg', title: '4番目'},
        { src: 'photo/05.jpg', title: '5番目'},
        { src: 'photo/06.jpg', title: '6番目'},
        { src: 'photo/07.jpg', title: '7番目'},
        { src: 'photo/08.jpg', title: '8番目'},
        { src: 'photo/09.jpg', title: '9番目'},
        { src: 'photo/10.jpg', title: '10番目'},
        { src: 'photo/11.jpg', title: '11番目'},
        { src: 'photo/12.jpg', title: '12番目'},
        { src: 'photo/13.jpg', title: '13番目'},
        { src: 'photo/14.jpg', title: '14番目'}
    ];

    var photoLength = photoList.length;

    // 画面の各要素取得
    var photo = document.getElementById('photo');
    var nextBtn = document.getElementById('nextBtn');
    var prevBtn = document.getElementById('prevBtn');
    var title = document.getElementById('title');

    // 現在のインデックス保存用の保存用の変数
    var currentIndex = 0;

    /* 関数 */

    // 指定の画像に表示を切り替える
    function showPhoto(index) {

        // 非表示
        for (var i = 0; i < photoLength; i++) {
             photoList[i].elem.style.display = 'none';
        }

        // 表示対象の要素を取得
        var targetPhoto = photoList[index];

        // タイトル表示
        /*
        var viewNumber = index + 1;
        title.innerHTML = '(' + viewNumber + ')' + targetPhoto.title;
        */

        // 画像の表示
        targetPhoto.elem.style.display = 'inline';

    }

    /* イベント */

    // next(次へ)ボタン押下時の処理
    nextBtn.onclick = function() {

    	// 表示する画像のインデックスを計算
    	currentIndex++;
    	if (currentIndex === photoLength) {
    		currentIndex = 0;
    	}

    	showPhoto(currentIndex);

    }

    // prev(戻る)ボタン押下時の処理
    prevBtn.onclick = function() {

        // 表示している画像が最後の画像だった場合は、最初の画像へ戻るように
        if (currentIndex === 0) {
            currentIndex = photoLength
        }
        currentIndex--;

        showPhoto(currentIndex);

    }

    /* 初期化処理 */

    // img要素に画像を設定
    var img, item;
    for (var i = 0; i < photoLength; i++) {

    	item = photoList[i];
    	// img要素の作成
    	img = document.createElement('img');

    	// 作成したimg要素に属性を設定
    	img.src = item.src;
    	img.alt = item.title;

        photo.appendChild(img);
        item.elem = img;

        console.log(item);

    }

    // 初期表示のためにshowPhoto関数を実行する
    showPhoto(currentIndex);

};

