<template>
  <div class="main mb-5">
    <h1>ライブ映像</h1>
    <p>
      アンプラで演奏したライブの映像です！<br />
      いろいろなライブの動画を上げています！<br />
      すこしでもアンプラの雰囲気を知ってもらえたら幸いです！
    </p>
    <ol id="songlist">
      <li v-for="movie in movies" :key="movie.id">
        <a :href="'#' + movie.id">{{ movie.title }}</a>
      </li>
    </ol>
    <!-- <p>こっちにも文章はおける</p> -->
    <div v-for="(movie, index) in movies" :key="movie.id">
      <h2 :id="movie.id">{{ index + 1 }}. {{ movie.title }}</h2>
      <div class="iframe-wrap">
        <iframe
          width="440"
          height="247"
          :src="youtubeURL(movie.id)"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
      <p id="description">{{ movie.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      movies: [
        //descriptionの改行はwhite-space: pre-line;によるので、行のはじめに要注意です。
        {
          title: '嘘月 / ヨルシカ',
          id: 'a7hN8ISNJBs', //2023 10月ライブ 14
          description: `ヨルシカの曲はアンプラグドで人気があり、頻繁に演奏されます！　アコースティックならではの落ち着いた雰囲気が素敵です！`,
        },
        {
          title: 'BOY / KING GNU',
          id: 'qPh3Lw4qYp0', //2023 10月ライブ 13
          description: `この曲のようなエレキギターを使う曲も、アコースティックギターで弾くと違った良さがありますね♪`,
        },
        {
          title: '人生のメリーゴーランド / 久石譲',
          id: 'dQOzXpocAtY', //2023 NFライブ 1-18
          description: `アンプラグドでは様々な形式のバンドが組まれるので、幅広いジャンルの曲を思い思いの楽器で演奏することができます！ ピアノとバイオリンの息のあった演奏で聴き惚れてしまいますね...`,
        },
        {
          title: 'ピーターパン / 優里',
          id: 'dC3SuWEifbU', //2023 NFライブ 1-5
          description: `力強く息ピッタリなツインボーカルの歌声にキレのあるアコギの音が合わさって最高にカッコイイ😍`,
        },
        {
          title: '波乗りジョニー / 桑田佳祐',
          id: '7kaKF9L64xc', //2023 NFライブ 2-5
          description: `ボーカル・ギター・ベース・カホン・ピアノを軸としたアンプラの基本的なバンド編成です！ 激しいライブパフォーマンスに会場も盛り上がってます☀️`,
        },
        {
          title: '楓 / スピッツ',
          id: 'yeo_zKXK7RU', //2023 NFライブ 1-32
          description: `何も言うことはありません。ボーカル2人の最高のハーモニーをお聴きください……`,
        },
        {
          title: 'もう一度 / [re:]project',
          id: 'AxC2QuqqlnY', //2023 NFライブ 3-44
          description: `こんなに大人数で歌う編成はなかなか珍しかったです！でもみんなで歌うと迫力が増して感動的でした…`,
        },
        {
          title: '名前を呼ぶよ / SUPER BEAVER',
          id: 'LBGj_HI3brk', //2024 熊野寮新歓 2
          description: `屈指のSUPER BEAVER好きたちによって組まれたバンドによる、今年の熊野寮新歓での演奏です。様々な音楽が好きな人がいるサークルなので、似た趣味の人と出会えると思います👍`,
        },
        {
          title: '美しく燃える森 / 東京スカパラダイスオーケストラ',
          id: 'm4DHzrqXBX8', //2023 NFライブ 3-26
          description: `圧巻の12人による演奏です！ 他の軽音サークルでは聴けない、様々な楽器の音をお楽しみください！`,
        },
        {
          title: '花になって / 緑黄色社会',
          id: '5-GVQSj6zHw', //2024 合同新歓ライブ 2
          description: `先日岡崎庵で行われた合同新歓ライブの映像です！ 力強くも美しい演奏をお楽しみください！`,
        },
        {
          title: '情熱大陸 with →Pia-no-jaC← / →Pia-no-jaC←×葉加瀬太郎',
          id: 'XLbZE0cdnIs', //2024 熊野寮新歓 1
          description: `ピアノ、カホン、バイオリンによるインスト曲です。それぞれの楽器の格好良さが存分に発揮されている、パワフルな演奏です...！`,
        },
        {
          title: '恋愛サーキュレーション / 花澤香菜',
          id: 'F0TWDHC-fik', //2024 新歓ライブ 1-5
          description: `今年の新歓ライブの映像です。アンプラグドではアニソンもよく演奏されます。会場全体で手を振って盛り上がりました🥰`,
        },
        {
          title: 'ブレーメン / ヨルシカ',
          id: 'wCYcumHPZgg', //2023 新人ライブ 11
          description: `入会後、6月の終わり頃に行われる新人ライブの映像です！ 新入生は、入会時のバンド組み会というイベントでバンドを組み、ライブに出ることができます👍`,
        },
      ],
    }
  },
  methods: {
    youtubeURL: (id) => 'https://www.youtube.com/embed/' + id,
  },
   head () {
    return {
      meta: [
        { hid: 'twitter-description', name: 'og:description', content: '京大アンプラグドで、過去に演奏された動画を公開しています。' }
      ]
    }
  }
}
</script>

<style scoped>
ol#songlist {
  margin-left: 0;
  padding-left: calc(10px + 1rem);
}
ol#songlist li {
  margin: 0.5rem auto;
}

p#description {
  margin: 0.25rem 0 0.5rem 10px;
  white-space: pre-line;
}

.iframe-wrap {
  padding-left: 10px;
}

@media screen and (max-width: 767px) {
  .iframe-wrap {
    position: relative;
    width: 100%;
    padding: 56.25% 0 0;
  }

  .iframe-wrap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    max-width: 560px;
    max-height: 315px;
  }
}
</style>
