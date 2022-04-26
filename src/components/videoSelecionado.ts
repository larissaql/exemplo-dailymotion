import Daily from "../models/Daily"


const renderVideoSelecionado = (show: Daily, container: HTMLElement) => {
    const htmlContent = `

    <div style="background-color: rgb(103, 153, 153);position:relative;padding-bottom:56.25%;height:0;overflow:hidden;"> 

    <iframe style="width:60%;height:60%;position:absolute;left:0px;top:0px;overflow:hidden" 
    frameborder="0" type="text/html" 
    src="https://www.dailymotion.com/embed/video/${show.id}?autoplay=1" 
    width="100%" height="100%" allowfullscreen allow="autoplay">
    
 

    </iframe>
    
    </div>


    `
    container.innerHTML = htmlContent
}

export default renderVideoSelecionado
