import axios from 'axios'
import renderVideoSelecionado from './components/videoSelecionado'

import { API_URL } from './config'
import { getDaily } from './models/Daily'
import './style.css'

const $ = document.querySelector.bind(document)

const searchVideos = async (id:string) => {
    const http = axios.create({
        baseURL: API_URL,
    })

    const response = await http.get(`/${id}`)

    if(response.status == 200){
        const { data } = response
        const webVideo = getDaily(data)

        const app = <HTMLDivElement>$('#app')
        renderVideoSelecionado(webVideo, app)
    }
}

const params = new URLSearchParams(document.location.search)
const id = params.get('id')
if(id){
    searchVideos(id)
}

