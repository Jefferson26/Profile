import React, { Component } from "react";
import Styles from "./papers.css";
import Tittle from "../tittle";

class Projects extends Component{
    render(){
        return (
            <div className={Styles.mainDivProjects}>
                <Tittle tittleName={"Papers"}/> 
                <div className={Styles.paperBodySection}>
                    <p className={Styles.papersTxt}><span className={Styles.tittlePaper}> Cloning in Customization Classes: A Case of a Worldwide Software Product Line. </span> In: Proceedings of the VII Brazilian Symposium on Software Components, Architectures, and Reuse. ACM, 2018. p. 43-52.</p>
                    <p className={Styles.papersTxt}><span className={Styles.tittlePaper}> Impacto de Clones em Scripts de Derivação de uma LPS Ad-hoc. </span> In: Congresso Brasileiro de Software: Teoria e Prática (CBSoft) WTDSoft. 2017. p. 47-53</p>
                    <p className={Styles.papersTxt}><span className={Styles.tittlePaper}> DyMMer. </span> In: the 20th International Systems and Software Product Line Conference, 2016, Beijing. Proceedings of the 20th International Systems and Software Product Line Conference on - SPLC '16, 2016. p. 314-317. </p>
                    <p className={Styles.papersTxt}><span className={Styles.tittlePaper}> Evaluating an IoT Application using Software Measures. </span> In: HCI International 2017, 2017, Vancouver. Distributed, Ambient and Pervasive Interactions, 2017</p>
                    <p className={Styles.papersTxt}><span className={Styles.tittlePaper}> GreatRoom: Uma Aplicação Android Baseada em Proximidade para a Criação de Salas Virtuais Inteligentes. </span> In: WebMedia 2016 WFA, 2016, Terezina. XV Worshop de Ferramentas e Aplicações (WFA), 2016</p>
                    <p className={Styles.papersTxt}><span className={Styles.tittlePaper}> Síntese de Múltiplos Modelos de Features em Linhas de Produto de Software. </span> In: ELA-ES 2016, 2016, Natal. Latin-American School on Software Engineering (ELA-ES), 2016. </p>
                    <p className={Styles.papersTxt}><span className={Styles.tittlePaper}> POOGame: Um Jogo Sério para o Ensino de Programação Orientada a Objetos. </span> In: XXIV Workshop sobre Educação em Computação (WEI), 2016, Porto Alegre. XXXVI Congresso da Sociedade Brasileira de Computação, 2016. p. 2333-2342. </p>
                </div>
            </div>
        )
    }

}

export default Projects;
