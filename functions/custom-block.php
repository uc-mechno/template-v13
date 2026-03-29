<?php

/**
 * カスタムブロックスタイルの登録
 */
// 段落ブロックのスタイル
register_block_style(
  'core/paragraph',
  array(
    'name'         => 'leading-trim',
    'label'        => '行間の打ち消し'
  )
);
register_block_style(
  'core/paragraph',
  array(
    'name'         => 'font-family-en',
    'label'        => '欧文フォント'
  )
);
// 見出しブロックのスタイル
register_block_style(
  'core/heading',
  array(
    'name'         => 'leading-trim',
    'label'        => '行間の打ち消し'
  )
);
register_block_style(
  'core/heading',
  array(
    'name'         => 'heading-h2-primary',
    'label'        => 'H2プライマリー'
  )
);
register_block_style(
  'core/heading',
  array(
    'name'         => 'heading-h3-primary',
    'label'        => 'H3プライマリー'
  )
);
register_block_style(
  'core/heading',
  array(
    'name'         => 'heading-h2-section-primary',
    'label'        => 'H2セクションプライマリー'
  )
);
register_block_style(
  'core/heading',
  array(
    'name'         => 'heading-h2-default-deco-none',
    'label'        => 'H2デフ装飾無し'
  )
);
register_block_style(
  'core/heading',
  array(
    'name'         => 'heading-h3-default-deco-none',
    'label'        => 'H3デフ装飾無し'
  )
);
register_block_style(
  'core/heading',
  array(
    'name'         => 'heading-h2-section-deco-none',
    'label'        => 'H2セク装飾無し'
  )
);
register_block_style(
  'core/heading',
  array(
    'name'         => 'heading-h3-section-deco',
    'label'        => 'H3セク装飾有り'
  )
);
// グループブロックのスタイル
register_block_style(
  'core/group',
  array(
    'name'         => 'justify-content-center',
    'label'        => '横中央揃え'
  )
);
register_block_style(
  'core/group',
  array(
    'name'         => 'align-item-center',
    'label'        => '縦中央揃え'
  )
);
register_block_style(
  'core/group',
  array(
    'name'         => 'text-align-center',
    'label'        => 'テキスト中央揃え'
  )
);
register_block_style(
  'core/group',
  array(
    'name'         => 'heading-h2-primary',
    'label'        => 'H2プライマリー'
  )
);
register_block_style(
  'core/group',
  array(
    'name'         => 'flex-center',
    'label'        => '中央揃え'
  )
);
register_block_style(
  'core/group',
  array(
    'name'         => 'article-width',
    'label'        => '記事幅'
  )
);
register_block_style(
  'core/group',
  array(
    'name'         => 'site-width',
    'label'        => 'サイト幅'
  )
);
// リストブロックのスタイル
register_block_style(
  'core/list',
  array(
    'name'         => 'list-none',
    'label'        => 'スタイルなし'
  )
);
register_block_style(
  'core/list-item',
  array(
    'name'         => 'flex-center',
    'label'        => '中央揃え'
  )
);
register_block_style(
  'core/cover',
  array(
    'name'         => 'object-fit-contain',
    'label'        => '縦横比を保持'
  )
);
// swellのリッチカラムブロックのスタイル
// register_block_style(
//   'loos/columns',
//   array(
//     'name'         => 'button-w100-sp',
//     'label'        => '100%幅SP'
//   )
// );
register_block_style(
  'loos/columns',
  array(
    'name'         => 'padding-sm',
    'label'        => '余白（小）'
  )
);
register_block_style(
  'loos/columns',
  array(
    'name'         => 'padding-md',
    'label'        => '余白（中）'
  )
);
register_block_style(
  'loos/columns',
  array(
    'name'         => 'padding-lg',
    'label'        => '余白（大）'
  )
);
register_block_style(
  'loos/column',
  array(
    'name'         => 'drop-shadow-sm',
    'label'        => '影（小）'
  )
);
register_block_style(
  'loos/column',
  array(
    'name'         => 'drop-shadow-md',
    'label'        => '影（中）'
  )
);
register_block_style(
  'loos/column',
  array(
    'name'         => 'drop-shadow-lg',
    'label'        => '影（大）'
  )
);
// swellのボタンブロックのスタイル
register_block_style(
  'loos/button',
  array(
    'name'         => 'button-w100-sp',
    'label'        => '100%幅SP'
  )
);
register_block_style(
  'loos/button',
  array(
    'name'         => 'button-frame',
    'label'        => '枠だけ'
  )
);
register_block_style(
  'loos/button',
  array(
    'name'         => 'button-move',
    'label'        => '回遊ボタン'
  )
);
register_block_style(
  'loos/full-wide',
  array(
    'name'         => 'padding-top-none',
    'label'        => '上の余白なし'
  )
);
register_block_style(
  'loos/full-wide',
  array(
    'name'         => 'padding-bottom-none',
    'label'        => '下の余白なし'
  )
);
register_block_style(
  'loos/full-wide',
  array(
    'name'         => 'background-size-contain',
    'label'        => '縦横比を保持'
  )
);
