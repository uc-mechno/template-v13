/**
 * グローバル定数
 */
const SITE_URL = 'ここにURL';
const CURRENT_URL = window.location.href;
const SITE_NAME = 'ここにサイト名';
const WP_PATH = 'wp/wp-content/themes/';
const THEMES_PATH = 'swell_child/';

/**
 * コピーライトの要素を取得して、最新年とサイト名を表示する
 */
(function () {
  const updateCopyright = () => {
    const copyright = document.querySelector('.copyright');
    const latestYear = new Date().getFullYear();

    if (copyright) {
      copyright.innerHTML = `
        <a href="${SITE_URL}">
          <span lang="en">©</span> ${latestYear} ${SITE_NAME}
        </a>`;
    }
  };
  updateCopyright();
})();

/**
 * サブメニューを開く処理
 * ウィンドウの幅が960px以上の場合のみ、サブメニューにクラスを追加
 * ウィンドウの幅が960px以下になった場合、サブメニューのクラスを削除
 */
(function () {
  const updateSubmenuState = () => {
    const windowWidth = window.innerWidth;
    const submenus = document.querySelectorAll('.sub-menu');

    if (windowWidth >= 960) {
      submenus.forEach((element) => {
        element.classList.add('is-opened');
      });
    } else {
      submenus.forEach((element) => {
        element.classList.remove('is-opened');
      });
    }
  };

  const handleResize = () => {
    updateSubmenuState();
  };

  document.addEventListener('DOMContentLoaded', () => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });
})();

/**
 * サブタイトルをクリーンアップする
 */
(function () {
  const cleanSubTitle = () => {
    const subTitleElement = document.querySelector('.c-pageTitle__subTitle');

    if (subTitleElement) {
      subTitleElement.textContent = subTitleElement.textContent.replace(/[– ]/g, '');
    }
  };
  cleanSubTitle();
})();

/**
 * AJAXローダーをクリーンアップする
 */
(function () {
  const cleanAjaxLoader = () => {
    const ajaxLoaderElement = document.querySelector('.ajax-loader');
    if (ajaxLoaderElement) {
      ajaxLoaderElement.remove();
    }
  };

  // 現在のURLからパーマリンクを確認
  const currentPath = window.location.pathname;

  // DOMContentLoadedイベントで実行、ただしhems-input-confirmページの場合のみ
  document.addEventListener('DOMContentLoaded', () => {
    if (currentPath.includes('hems-input-confirm')) {
      cleanAjaxLoader();
    }
  });
})();

/**
 * BaguetteBoxを初期化
 */
(function () {
  const initializeBaguetteBox = () => {
    baguetteBox.run('.post_content', {
      animation: 'fadeIn',
    });
  };
  initializeBaguetteBox();
})();

/**
 * ビューポートの設定を切り替える関数。
 * ウィンドウの外幅が360ピクセルを超える場合、ビューポートをデバイス幅に設定し、
 * それ以外の場合は幅を360ピクセルに設定
 */
(function () {
  const viewport = document.querySelector('meta[name="viewport"]');

  const switchViewport = () => {
    const value = window.outerWidth > 360 ? 'width=device-width,initial-scale=1' : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  };

  window.addEventListener('resize', switchViewport);
  switchViewport();
})();

/*
/**
 * スクロールイベントを検知して、要素を表示する
 */
/* TODO：一旦コメントアウト
(function () {
  // オプションを設定
  const options = {
    root: null, // ビューポートをルートとして使用
    rootMargin: '0px', // 上端から200px位置で交差判定
    threshold: 0, // 要素が少しでも見えたら反応
  };

  // コールバック関数を定義
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const floating = document.querySelector('.js-floating');
      if (!entry.isIntersecting) {
        // 要素が見えない（スクロールが200px以上）
        floating.classList.remove('is-hide');
        floating.classList.add('is-show');
      } else {
        // 要素が見える（スクロールが200px未満）
        floating.classList.add('is-hide');
        floating.classList.remove('is-show');
      }
    });
  };

  // Observerインスタンスを作成
  const observer = new IntersectionObserver(callback, options);

  // 観察対象の要素を作成
  const floatingElement = document.querySelector('.l-scrollObserver');
  if (floatingElement) {
    observer.observe(floatingElement);
  }

  // 観察を開始
})();
*/

/**
 * スクロールアニメーションの設定
 */
(function () {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  // 無限にアニメーションを繰り返す場合
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('kanta-animation');
        entry.target.classList.add('is-animated');
      } else {
        entry.target.classList.remove('kanta-animation');
        entry.target.classList.remove('is-animated');
      }
    });
  };

  // 一度だけアニメーションを実行する場合
  // const observerCallback = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('kanta-animation');
  //       // 要素が表示されたら、その要素の観察を停止
  //       observer.unobserve(entry.target);
  //     }
  //   });
  // };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  //const kantaTriggers = document.querySelectorAll('.kanta-trigger');
  const jsTriggers = document.querySelectorAll('.js-trigger');

  jsTriggers.forEach((trigger) => {
    observer.observe(trigger);
  });
})();
