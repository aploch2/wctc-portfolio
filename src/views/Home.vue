<template>
  <div class="home">
    <header>
      <div class="basic-about">
        <p>// Hello, I am</p>
        <h1>Austin Ploch.</h1>
        <h2>Front-End Developer / Web Designer</h2>
        <div class="button-group">
          <router-link class="button" to="/portfolio">View My Portfolio <font-awesome-icon :icon="['fas', 'chevron-right']" /></router-link>
          <a href="mailto:austin@austinploch.com" class="button">Get In Touch <font-awesome-icon :icon="['fas', 'envelope']" /></a>
        </div>
      </div>
      <div class="austin-photo">
        <img src="https://austinploch.com/images/austin-ploch.jpg" alt="Photo of Austin Ploch. ">
        <!-- <div class="bg-square"></div> -->
      </div>
    </header>
    <main>
      <section class="main-content">
        
        <article class="about-text">
          <h2>// About Me</h2>
          <p>
            I am a Front End Web Developer and Web Designer based out of south-east Wisconsin. 
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptates ea modi perferendis optio dolore eaque, molestias quia neque at maiores quae nobis quibusdam deleniti ipsum sint tenetur officia voluptas expedita itaque quod nostrum! Quod, minima quos repudiandae eligendi in odit quibusdam nam unde. Debitis dolorum quasi consequatur exercitationem deleniti odio! Corporis aut laudantium modi, et beatae debitis reiciendis eum ullam tempora nam perspiciatis autem eaque atque, ea sed. Necessitatibus fugit eveniet omnis, qui perspiciatis quae, suscipit explicabo eligendi quis cum doloremque quas deserunt, neque praesentium id autem rerum beatae maxime debitis magni eos blanditiis. Numquam, unde ipsum? Inventore, nesciunt.</p>
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
        // border-radius: 10%;
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
