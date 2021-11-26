import React from'react';
import './Home.css';

//cria a função home para retornar o conteúdo html que precisa ser renderizado na tela 
function Home(){
    return(
        //html só retorna um elemento, então para várias coisas bota numa div, e nessa div você organiza
        //sem o div, fica um caminho abreviado, um fragmento que or eact conhece
        <>
            <h1 className="titulo">Home</h1>
            <img src="https://image.freepik.com/free-vector/connecting-teams-concept-landing-page_23-2148317960.jpg" 
            alt="Imagem Tela Inicial" className = "img"/>
        </>
    );
}

export default Home;