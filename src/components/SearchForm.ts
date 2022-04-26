import axios from "axios"

import { API_URL } from "../config"
import { getDaily } from "../models/Daily"
import renderVideosCard from "./videosCard"

const $ = document.querySelector.bind(document)

const http =axios.create({
    baseURL: API_URL
})

export const renderSearchForm = (container: HTMLElement) => {

    const htmlContent = `
    <form id="search-form">
        <input type="text" name="filter" id ="filter" placeholder="Digite o título do vídeo">
        <button id="search">Pesquisar</button>
    </form>
    `
    container.innerHTML = htmlContent
}


export const searchVideos = async () => {
    const params = new URLSearchParams(document.location.search)
    const filter = params.get('filter')
    
    if(filter) {
        const response = await http.get('/videos', { params: {search: filter},})
        console.log(response)
        
        if(response.status == 200) {
            const {data} = response
            const {list} = data

            console.log(list)

            const resultArea = <HTMLDivElement>$('#result-area')
            resultArea.innerHTML = ''
            list.forEach((jsonObj: any) => {
            
                const webVideo = getDaily(jsonObj)
                renderVideosCard(webVideo, resultArea)
            })
        }
    }
}
searchVideos()
export default renderSearchForm