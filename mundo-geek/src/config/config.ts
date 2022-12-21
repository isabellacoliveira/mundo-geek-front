export async function pegaToken(){
    try{
        return await localStorage.getItem('u');
        
    } catch (error) {
        return undefined
    }
}

// export const config = {
//     headers: {
//       'Authorization': `Bearer ` + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6InVzdWFyaW8gYWRtaW4iLCJzb2JyZW5vbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3MTQ5NTk5NCwiZXhwIjoxNjcxODQxNTk0fQ.BmJiFFpoRhEJsNxe9_wdcRIqQYCkk8-ovs_5PwtcZRw'
//     }
//   }