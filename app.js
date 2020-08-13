
Vue.component('tab', {
  template: `
  <div>
    <div class="tab">
      <ul class="tab-list" role="tablist">
        <li class="tab-item" role="presentation">
          <a
            href="#cat"
            class="tab-link"
            id="cat-tab"
            role="tab"
            aria-controls="cat"
            :aria-selected="true"
            @click="emitTabOne"
          >ねこ</a>
        </li>
        <li class="tab-item" role="presentation">
          <a
            href="#dog"
            class="tab-link"
            id="dog-tab"
            role="tab"
            aria-controls="dog"
            :aria-selected="false"
            @click="emitTabTwo"
          >いぬ</a>
        </li>
      </ul>
    </div>
  
    <div
      class="tabpanel"
      :class="{ 'is-active' : current === 'cat' }"
      id="cat"
      role="tabpanel"
      aria-labelledby="cat-tab"
    >
      <p>ネコ（猫）は、狭義には食肉目ネコ科ネコ属に分類されるリビアヤマネコ（ヨーロッパヤマネコ）が家畜化されたイエネコ（家猫、Felis silvestris catus）に対する通称である。イヌ（犬）と並ぶ代表的なペットとして日本を含め世界中で広く飼われている。</p>
      <figure>
        <img src="https://media.giphy.com/media/vFKqnCdLPNOKc/source.gif" alt="" />
      </figure>
    </div>
  
    <div
      class="tabpanel"
      :class="{ 'is-active' : current === 'dog' }"
      id="dog"
      role="tabpanel"
      aria-labelledby="dog-tab"
    >
      <p>属名 Canis、種小名 lupus はラテン語でそれぞれ「犬」「狼」の意。亜種名 familiaris はやはりラテン語で、「家庭に属する」といった意味。また、英語: familiar、フランス語: familier など「慣れ親しんだ」を意味する現代語の語源でもある。</p>
      <figure>
        <img src="https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif" alt="" />
      </figure>
    </div>
  </div>
  `,
  props: [
    'current'
  ],
  
  methods: {
    emitTabOne() {
      this.$emit('tab-one', this.current);
    },
    emitTabTwo() {
      this.$emit('tab-two' , this.current);
    },
  },
});

new Vue({
  el: '#app',
  data: {
    current: 'cat',
    current: 'dog',
  },
  methods: {
    onTabOne () {
      this.current = 'cat'
    },
    onTabTwo () {
      this.current = 'dog'
    },
  },
});