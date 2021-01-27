# Composition API (composition : 合成)

ロジックを抽出し、再利用することができる関数ベースの API のこと。

大規模開発にはコードの再利用性が重要になる。

逆を言えば小~中規模なプロダクトを CompositionAPI で書き直しても恩恵はない。

## 基本例文

Vue 2 系で書かれたシンプルな処理

```js
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    count: 0,
  }),
  methods: {
    increment() {
      this.count++
    },
  },
})
```

Composition API で書き直すと

```js
import { defineComponent, ref } from '@vue/composition-api'

const useCounter = () => {
  // ※1
  const count = ref(0) // ※2
  const increment = () => {
    count.value++ // ※3
  }
  return { count, increment }
}

export default defineComponent({
  setup() {
    const { count, increment } = useCounter()
    return { count, increment } // ※4
  },
})
```

※1：Composition Function use 〇〇という命名慣習がある

※2：ref, reactive でラップされた値はリアクティブになる

※3：ref でラップしているものには .value でアクセス

※4：template で使用するものにのみ return で返す。(実質使用宣言)

## 導入メリット

- setup にまとめてに記述できるので、this 参照から開放される。
  - Vue2.x ではロジックが散らばり、this が頻繁に登場していた。
  - Vue には既に関数切り出しができる mixin あるけどダメなの？ → mixin はアンチパターンという話
- コードジャンプの回数が減り可読性 UP
  - data を見て、computed を見て、methods を確認する、、といったことが起こらない。
- return 文を見るだけで、template で使用できるものが一目瞭然
- 同じ処理を使いまわせるので柔軟性が上がる
- TypeScript 型推論の強化

## デメリット

- 設計やアーキテクチャが重要になる。
  - これまでは状態は Vuex, 処理はコンポーネントに, という暗黙の了解があったがこれがなくなる。
  - どの単位で切り出し、ロジックを共通化するかなど自由度が高まってしまい、現状ベストプラクティスがない状態にある。
- 学習コストが高い

# 結局何を解決してくれるのか

Vue2.x では１つのコンポーネントに 見た目 状態 ロジックをまとめて扱っていたが、必要な部分を切り出すことができなかった。これを解決してくれる。

[機能単位のコード分割と合成例 Qiita](https://qiita.com/snagasawa_/items/ef70032f996face318e5)

# ライフサイクル

- 基本 “ on + [従来の呼び出し](https://jp.vuejs.org/v2/guide/instance.html?#%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%83%95%E3%83%83%E3%82%AF)() ”
- Vue 2.x 系 → CompositionAPI では create 系のみ変更あり

# 機能周りの説明

[Vue 公式 Composition API](https://v3.ja.vuejs.org/guide/composition-api-setup.html#%E5%BC%95%E6%95%B0)

# Installation

既存の Nuxt プロジェクトに導入することを想定

## package install

- $ npm install @nuxtjs/composition-api --save
- @vue/composition-api を追加すると、Vue2 系でも使用可能

## プラグイン読み込み

```js
plugins/composition-api.ts

import Vue from 'vue' import
VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
```

nuxt.config.js

```js
plugins: ['@/plugins/composition-api']
```

## Jest.config で Jest を扱えるように

jest.config.js

```js
  moduleNameMapper: {
    '@nuxtjs/composition-api': '@nuxtjs/composition-api/lib/entrypoint.js',
  }
```

# こんな使い方もあり？かも(調査中)

[Composition API で切り出した処理を functions ディレクトリに格納して再利用](https://www.asobou.co.jp/blog/web/composition-api2)

[ref](https://mya-ake.com/posts/vue-composition-api-columns/)
