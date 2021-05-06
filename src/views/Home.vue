<template>
  <div class="home">
    <header>
      <div class="basic-about">
        <p>// Hello, I am</p>
        <h1>Austin Ploch.</h1>
        <h2>Front-End Developer / Web Designer</h2>
        <div class="button-group">
          <router-link class="button" to="/portfolio"><font-awesome-icon :icon="['fas', 'code']" /> View My Portfolio</router-link>
          <a href="mailto:austin@austinploch.com" class="button"><font-awesome-icon :icon="['fas', 'envelope']" /> Get In Touch</a>
        </div>
      </div>
      <div class="austin-photo">
        <img src="https://austinploch.com/images/austin-ploch-tall-dark.jpg" alt="Photo of Austin Ploch. ">
        <!-- <div class="bg-square"></div> -->
      </div>
    </header>
    <main>
      <section class="main-content">
        
        <article class="about-text">
          <h2>// About Me</h2>
          <p>
            I am a Front-End Web Developer and Web Designer based out of south-eastern Wisconsin. I build bespoke websites to assist your personal and business needs.
          </p>
          <p>Some of my specialties include:
            <a href="https://wordpress.org" class="link-highlight" target="_blank">WordPress</a>, 
            <a href="https://vuejs.org" class="link-highlight" target="_blank">VueJS</a>, 
            <a href="https://sass-lang.com/" class="link-highlight" target="_blank">SCSS</a>, 
            <a href="https://www.mongodb.com/" class="link-highlight" target="_blank">MongoDB</a>, 
            <a href="https://www.mysql.com/" class="link-highlight" target="_blank">MySQL</a>, and 
            <a href="https://www.docker.com/" class="link-highlight" target="_blank">Docker</a>.
          </p>
          <!-- <ul>
            <li><a href="https://wordpress.org" class="link-highlight">WordPress</a></li>
            <li><a href="" class="link-highlight">VueJS</a></li>
            <li><a href="" class="link-highlight">SCSS</a></li>
            <li><a href="" class="link-highlight">MongoDB</a></li>
            <li><a href="" class="link-highlight">MySQL</a></li>
            <li><a href="" class="link-highlight">Docker</a></li>
          </ul> -->
          <p>I studied and received my Associate's Degree at Waukesha County Technical College in 2021. I began learning web design back in 2012, in my junior year of high school. It started as just a fun course to take to fill the schedule. Shortly after, I realized I really enjoyed learning HTML and CSS. I would go home after school every day and learn on my own. It wasn't long until I was spending most of my free time trying to learn more.</p>
          <p>After the semester ended, I pretty much dropped web design and went back to what I wanted to study in college, graphic design. I didn't do anything with web design until a year and a half later when I applied to the Art Institute of Minneapolis and my advisor suggested I study web design instead of graphic design. A year later, I moved home and started studying at WCTC.</p>
        </article>
        <aside class="about-resume">
          <!-- <ul>
            <li>
              <a href="https://austinploch.com/files/Ploch_Résumé.pdf" ><font-awesome-icon :icon="[ 'fas', 'print' ]" /> Print Résumé</a>
            </li>
            <li>
              <a href="https://austinploch.com/files/Ploch_Résumé.pdf" download><font-awesome-icon :icon="[ 'fas', 'file-pdf' ]" /> Download Résumé</a>
            </li>
          </ul> -->
          <h3>// Want More Details?</h3>
          <p>Check out my résumé below.</p>
          <a class="button-dark" href="https://austinploch.com/files/Ploch_Résumé.pdf" download><font-awesome-icon :icon="[ 'fas', 'file-pdf' ]" /> Download Résumé</a>
        </aside>
      </section>
    </main>
  </div>
</template>

<script>


export default {
  name: "Home",
  components: {
    
  },
  setup() {


    return{
    }
  },
  methods: {
    printPDF(pdfURL) {
      let w = window.open(pdfURL);
      w.print();
    }
    
  }
};
</script>

<style lang="scss">
.home {
  .body-text {
      @include wrapper;
    }
  header {
    @include wrapper;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .basic-about {
      width: 60%;
      position: relative;
      animation-name: page-load-slide-in-left;
      animation-duration: 1.5s;
      animation-delay: 0s;
      animation-timing-function: ease-in-out;

      p:first-child {
        margin: 0px;
        color: var(--gray);
      }
      h1 {
      text-transform: uppercase;
      margin-top: 0em;
      }
      h2 {
        @include heading-text(1);
        text-transform: inherit;
        margin-bottom: 2em;
        // color: var(--gray);
        font-weight: normal;
        margin-top: 1em;
      }
      .button {

        &:first-child {
          margin-right: 1em;
        }
      }
    }
    .austin-photo {
      width: 40%;
      padding: 0 2em;
      position: relative;
      position: relative;
      animation-name: page-load-slide-in-right;
      animation-duration: 1.5s;
      animation-delay: 0s;
      animation-timing-function: ease-in-out;


      img {
        // width: 100%;
        max-width: 500px;
        height: auto;
        // border-radius: 50%;
        outline: 10px solid var(--dark-gray);
        // z-index: 5;
        // position: relative;
      }
      .bg-square {
        width: 500px;
        height: 500px;
        background: var(--white);
        position: absolute;
        top: 25px;
        right: -25px;
        z-index: -1;
      }
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        
        .basic-about {
          width: 90%;

          .button-group {
            display: flex;
            flex-direction: column;
            align-items: center;

            .button {

              &:first-child {
                margin-right: 0;
                margin-bottom: 1em;
              }
            }
          }
        }
    }
  }
  main {
    background: var(--white);
    padding: 50px 0;
    color: var(--black);

    .main-content {
      @include wrapper;
      display: flex;
      justify-content: center;
      animation-name: page-load-fade-in;
      animation-duration: 2s;
      animation-delay: 0s;
      animation-timing-function: ease-in-out;


      .about-text {
        width: 70%;
        padding: 0 2em 0 0;
        position: relative;

        p {
          margin-bottom: 0.75em;
        }
        ul {
          display: flex;
          flex-direction: column;
          // justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 0.75em;

          li {
            display: inline-block;
          }
        }

      }
      .about-resume {
        width: 30%;
        padding: 0 1em;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
          @include heading-text(1.5);
          color: var(--black);
          text-transform: inherit;
          margin-bottom: 1em;
        }
        p {
          margin-bottom: 1em;
        }
      }
    }
    h2 {
      @include heading-text(2);
      color: var(--black);
      margin-bottom: 1.5em;
    }
    p {
      color: var(--body-text-color-dark);
    }
  }
}
</style>
