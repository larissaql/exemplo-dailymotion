import Daily from "../models/Daily"


const renderVideoSelecionado = (videos: Daily, container: HTMLElement) => {
    const htmlContent = `
    <div> 

        <iframe style="width:60%;height:60%;position:absolute;left:0px;top:0px;overflow:hidden; padding: 10px;" 
        frameborder="0" type="text/html" 
        src="https://www.dailymotion.com/embed/video/${videos.id}?autoplay=1" 
        width="100%" height="100%" allowfullscreen allow="autoplay">

        </iframe>
    </div>

    `
    container.innerHTML = htmlContent
}

export default renderVideoSelecionado
