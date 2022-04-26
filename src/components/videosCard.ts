import Daily from "../models/Daily";


const renderVideosCard = (videos: Daily, container: HTMLElement) => {
    const htmlContent = `

    <div class="tv-card">
    <a id="modal-${videos.id}" href="video.html?id=${videos.id}">
            
            <h3>${videos.title}</h3>
        </a>
    </div>
    `
    container.innerHTML += htmlContent
}

export default renderVideosCard
