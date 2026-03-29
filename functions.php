<?php

/* 子テーマのfunctions.phpは、親テーマのfunctions.phpより先に読み込まれることに注意してください。 */


/**
 * 親テーマのfunctions.phpのあとで読み込みたいコードはこの中に。
 */
// add_filter('after_setup_theme', function(){
// }, 11);


/**
 * 子テーマでのファイルの読み込み
 */
add_action('wp_enqueue_scripts', function () {

  $timestamp = date('Ymdgis', filemtime(get_stylesheet_directory() . '/style.css'));
  wp_enqueue_style('child_style', get_stylesheet_directory_uri() . '/style.css', [], $timestamp);

  /* その他の読み込みファイルはこの下に記述 */
}, 11);

/** ここから下の関数や変数はある程度作り込んだらCode Snippetへ複製してしまってもいい */

/**
 * パスの取得
 */
//ルートパス
$WP_ROOT_PATH = get_stylesheet_directory_uri();
$WP_CSS_PATH  = esc_html($WP_ROOT_PATH . '/assets/css');
$WP_JS_PATH   = esc_html($WP_ROOT_PATH . '/assets/js');
// タイムスタンプ付きのパス
$TIMESTAMP_PATH      = get_stylesheet_directory();
$TIMESTAMP_CSS_PATH  = esc_html($TIMESTAMP_PATH . '/assets/css');
$TIMESTAMP_JS_PATH   = esc_html($TIMESTAMP_PATH . '/assets/js');

/**
 * 指定されたタイプに応じてパスを取得する関数
 *
 * @param string $_type CSSまたはJSのどちらかを指定する文字列
 * @return string CSSパスまたはJSパス、指定されたタイプが無効な場合は空の文字列を返す
 */
function GET_PATH(string $_type)
{
  global $WP_CSS_PATH;
  global $WP_JS_PATH;
  switch ($_type) {
    case 'css':
      return $WP_CSS_PATH;
      break;
    case 'js':
      return $WP_JS_PATH;
      break;
    default:
      return '';
      break;
  }
}

/**
 * 指定されたタイプに応じてタイムスタンプ付きのパスを取得する関数
 *
 * @param string $_type CSSまたはJSのどちらかを指定する文字列
 * @return string タイムスタンプ付きのCSSパスまたはJSパス、指定されたタイプが無効な場合は空の文字列を返す
 */
function GET_TIMESTAMP_PATH(string $_type)
{
  global $TIMESTAMP_CSS_PATH;
  global $TIMESTAMP_JS_PATH;
  switch ($_type) {
    case 'css':
      return $TIMESTAMP_CSS_PATH;
      break;
    case 'js':
      return $TIMESTAMP_JS_PATH;
      break;
    default:
      return '';
      break;
  }
}

/**
 * 子テーマのスタイルシートとスクリプトをエンキューする関数
 */
function child_theme_wp_enqueue_scripts()
{

  $timestamp = [
    'child-style' => date('Ymdgis', filemtime(GET_TIMESTAMP_PATH('css') . '/child.css')),
    'child-script' => date('Ymdgis', filemtime(GET_TIMESTAMP_PATH('js') . '/child.js')),
  ];

  // cssファイルの読み込み
  wp_enqueue_style('googleapis', '//fonts.googleapis.com', [], null);
  wp_enqueue_style('gstatic', '//fonts.gstatic.com', [], null);
  wp_enqueue_style('google-fonts-montserrat', 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap', [], null);
  wp_enqueue_style('baguettebox-style', 'https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.css', [], '1.11.1', false);
  wp_enqueue_style('child-style', GET_PATH('css') . '/child.css', [], $timestamp['child-style']);

  // jsファイルの読み込み
  wp_enqueue_script('baguettebox-script', 'https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.js', [], '1.11.1', true);
  wp_enqueue_script('child-script', GET_PATH('js') . '/child.js', [], $timestamp['child-script'], true);
}
add_action('wp_enqueue_scripts', 'child_theme_wp_enqueue_scripts');

/**
 * スタイルシートのlinkタグにrel="preconnect"を追加し、gstaticの場合はcrossorigin属性も追加する
 *
 * @param string $tag スタイルシートのlinkタグ
 * @param string $handle スタイルシートのハンドル名
 * @return string $tag スタイルシートのlinkタグ
 */
function replace_link_tag($tag, $handle)
{
  if ($handle === 'googleapis' || $handle === 'gstatic') {
    $tag = str_replace('stylesheet', 'preconnect', $tag);
    if ($handle === 'gstatic') {
      $tag = str_replace(' href=', ' crossorigin href=', $tag);
    }
  }
  return $tag;
}
add_filter('style_loader_tag', 'replace_link_tag', 10, 2);

/**
 * 子テーマのブロックエディタ用スタイルシートとスクリプトをエンキューする関数
 */
function child_theme_enqueue_block_editor_assets()
{

  $timestamp = [
    'child-editor-style' => date('Ymdgis', filemtime(GET_TIMESTAMP_PATH('css') . '/child-editor-style.css')),
    //'child-block-script' => date('Ymdgis', filemtime(GET_TIMESTAMP_PATH('js') . '/child-block.js')),
  ];

  wp_enqueue_style('child-editor-style', GET_PATH('css') . '/child-editor-style.css', [], $timestamp['child-editor-style']);
  //wp_enqueue_script('child-block-script', GET_PATH('js') . '/child-block.js', [], $timestamp['child-block-script'], ['strategy' => 'defer']);
}
add_action('enqueue_block_editor_assets', 'child_theme_enqueue_block_editor_assets');


// カスタムブロックは別途読み込み
require_once(dirname(__FILE__) . '/functions/custom-block.php'); // カスタムブロックの設定
