type Daily = {
    id: string
    title: string
    channel: string
    owner: string
  }
  
  // Arrow Function
  export const getDaily = (objJson: any): Daily => {
    // Associação por desestruturação
    const {
      id,
      title,
      channel,
      owner,
    } = objJson

  
    const daily: Daily = {
      id,
      title,
      channel,
      owner
    }
    return daily
  }
  
  export default Daily