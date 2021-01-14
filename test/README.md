# Test
<a href="https://jestjs.io/ja/">
  <img src="https://img.shields.io/badge/Jest-brightgreen">
</a>
<a href>
  <img src="https://img.shields.io/badge/Vue.js向けテストドキュメント-green">
</a>
<a href="https://www.npmtrends.com/jest-vs-ava-vs-mocha-vs-webdriverio">
  <img src="https://img.shields.io/badge/npm trends-darkblue">
</a>

Nuxt公式推奨のJestについて

~~BDD（Behavior Driven Development）ビヘイビア駆動開発と呼ばれる開発手法~~

~~プログラムに期待された振る舞いや、条件をテストコードに落とし込む~~

---

### メリット
- 自動なので時間短縮
- 結合時のバグ出現率を下げることができる
- 明示的にバグが検出されるのでリファクタリングが容易に
- 並列処理

総合的に保守性能が高まる。

### デメリット
- 学習コスト
- 開発速度の低下（テストコードがあれば回避できたバグを修正する時間はここでは含めない）

テストコードは破綻が常である。

---

## テスト対象
下記の三つ
- Vuex データストア
- 挙動が複雑なコンポーネント
- プラグインやフレームワークにに依存しないレイヤー

テストコードはプロジェクトの80%網羅を目指すのが良いとされている。

網羅率計測：カバレッジレポート↓

ファイル名 - 命令実行網羅率 - 分岐処理網羅率 - 関数呼出網羅率 - 実行可能行網羅率 - 実行されていない行
<img width="759" alt="report" src="https://user-images.githubusercontent.com/38455912/104635370-2567ef00-56e5-11eb-9a7c-c4c047084873.png">

## テスト対象にすべきでないもの
- HTMLレベルでのテスト

HTMLレベルのテストコードは、度重なるUI変更により消費期限が短い。
→ [snapshot](https://jestjs.io/docs/ja/snapshot-testing)を用いる

### snapshotでのテスト
コンポーネントの状態とレンダリング後のDOM構造の差分を検知する。

- テスト実行時、スナップショットが別ディレクトリに初期状態として保存される。
- すでにスナップショットが存在する場合には整合性チェックが始まる。


正しい状態と言うものは存在せず、意図的な変更かどうかは開発者に委ねられる。
故に精度は低いが、そのコンポーネントで起こり得る状態を一度記述しておけば、そのテストコードは恒久的に扱えるのでメンテナンスコストが低い。
