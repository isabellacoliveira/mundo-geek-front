export async function pegaToken(){
    try{
        return await localStorage.getItem('u');
        
    } catch (error) {
        return undefined
    }
}

export const config = {
    headers: {
      'Authorization': `Bearer ` + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6InVzdWFyaW8gYWRtaW4iLCJzb2JyZW5vbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3MTI4MjI2MCwiZXhwIjoxNjcxNjI3ODYwfQ.cfcxl5sbly7scDPUvRglDNR4NvxXT-RPcEKYhFd5Q4Q'
    }
  }