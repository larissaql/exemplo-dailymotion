import Daily from "../models/Daily";


const renderVideosCard = (videos: Daily, container: HTMLElement) => {
    const htmlContent = `
    <div class="tv-card">
      <a class="modal-link" id="modal-${videos.id}" href="video.html?id=${videos.id}">
        <div class="show-banner">
            <img src="https://www.dailymotion.com/thumbnail/video/${videos.id}">
        </div>
        <h3>${videos.title}</h3>
      </a>
    </div>
    `
  container.innerHTML += htmlContent
}
export default renderVideosCard
