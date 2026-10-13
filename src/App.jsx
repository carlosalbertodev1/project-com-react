import fotoperfil from "./assets/imgs/perfill.jpg"
import destaque1 from "./assets/imgs/gatoexplosao.jpg"
import "./style.css"


function App() {
  

  return (
    <>  
      <div id="conteudo">
        <div id="cabecalho">
            <div id="fotodeperfil">
                <img id="fotoperfil" height="250px" src={fotoperfil} alt="fotodeperfil"/>
            </div>
            <div id="textodeperfil">

                <h2>digitalcollegebr</h2>
                <p><b>64,7 mil</b> seguidores   <span id="numero_seguidores">3.009 mil</span> seguindo</p>
                <strong>Digital college + Fortaleza/Ce_</strong>

            <p class="juntinhos" id="essenao"> 
                <span id="pill">
                    <img src="download.jpn" height="16" alt="logo"/>
                     <a href="https://www.threads.com/@digitalcollegebr?xmt=AQG0JLFd57Y3-rDKLOpRvkNg5mXg-rBih5V4dbQFqvgaa7Q" target="='_blank'">digitalcollegebr</a>
                </span>
            </p>
            <p class="juntinhos">🏆| Maior escola de IA e habilidades digitais do Brasil. </p>
            <p class="juntinhos">🧑‍💻| + de 10000 alunos atendidos. </p>
            <p class="juntinhos">🤝| + 80% de empregabilidade. </p>
            <p class="juntinhos">👇| Vem ser COLLEGER |👇 </p>
                <a href="https://bio.digitalcollege.com.br/" target="='_blank'">
                    <i id="threads.png"></i>
                        bio.digitalcollege.com.br
                </a>
            </div>
        </div>
        <div id="destaques">
        <div class="destaque">
            <img src={destaque1} alt="imagem do destaque"/>
            <p>destaque1</p>
        </div>
        <div class="destaque">
            <img src="https://placehold.co/100x100" alt="imagem do destaque"/>
            <p>destaque2</p>
        </div>
        <div class="destaque">
            <img src="https://placehold.co/100x100" alt="imagem do destaque"/>
            <p>destaque3</p>
        </div>
        <div class="destaque">
            <img src="https://placehold.co/100x100" alt="imagem do destaque"/>
            <p>destaque4</p>
        </div>
        <div class="destaque">
            <img src="https://placehold.co/100x100" alt="imagem do destaque"/>
            <p>destaque5</p>
        </div>
        <div class="destaque">
            <img src="https://placehold.co/100x100" alt="imagem do destaque"/>
            <p>destaque6</p>
        </div>
        <div class="destaque">
            <img src="https://placehold.co/100x100" alt="imagem do destaque"/>
            <p>destaque7</p>
        </div>
    </div>
    
    <div id="feed">
            <div class="post"><img src="anao.jpg" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
            <div class="post"><img src="https://placehold.co/260x300" alt="post_do_feed"/></div>
    </div>
    </div>
    </>
  )
}
export default App
