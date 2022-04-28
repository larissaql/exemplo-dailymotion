import axios from "axios"

import { API_URL } from "../config"
import { getDaily } from "../models/Daily"
import renderVideosCard from "./videosCard"

const $ = document.querySelector.bind(document)

const http =axios.create({
    baseURL: API_URL
})

 const renderSearchForm = (container: HTMLElement) => {

    const htmlContent = `
    <form id="search-form">
        <input type="text" name="filter" id ="filter" placeholder="Digite o título do vídeo">
        <button id="search">Pesquisar</button>
    </form>
    `
    container.innerHTML = htmlContent



 const searchVideos = async () => {
    const url = new URL(window.location.href)
    const filter = url.searchParams.get('filter')
    
    if(filter) {
        const response = await http.get('/videos', { params: {search: filter},})
        
        if(response.status == 200) {
            const {data} = response
            const resultArea = <HTMLDivElement>$('#result-area')
            resultArea.innerHTML = ''

            data.list.forEach((jsonObj: any) => {
                const daily = getDaily(jsonObj)
                renderVideosCard(daily, resultArea)
                
            })
            }
        }
    }
searchVideos()
}
export default renderSearchForm