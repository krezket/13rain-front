const URL_PREFIX = "http://localhost:3001"

const API = {
    login:(userObj)=>{
        return fetch(`${URL_PREFIX}/users/login`,{
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type":"application/json"

            }
        }).then(res=>res.json())
    },
    signup:(userObj)=>{
        return fetch(`${URL_PREFIX}/users`,{
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type":"application/json"

            }
        }).then(res=>res.json())
    },
    // TODO: GET BY ID FOR PROFILE / USER
    getProfile: async (x) => {
        try {
            const dbProfileData = await fetch(`${URL_PREFIX}/users/${x}`, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            return dbProfileData.json();
        } catch (error) {
            console.log(error);
        }
    },
    //get all profiles
 getProfiles: async () => {
    try {
        const dbProfileData = await fetch(`${URL_PREFIX}/users/`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        return dbProfileData.json();
    } catch (error) {
        console.log(error);
    }
  },
  verifyToken:(token)=>{
      return fetch(`${URL_PREFIX}/users/auth/verifytoken`,{
          headers:{
              "authorization":`Bearer ${token}`
            }
        }).then((res) => {
            if (res.ok) {
                // console.log(res)
                return res.json();
            } else {
                throw new Error("falied signup");
            }
        });
    },
    createProfile: async (x) => {
        try {
            const response = await fetch(`${URL_PREFIX}/profiles`, {
                method: 'POST',
                body: JSON.stringify(x),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            
            if (response.ok) {
                return response.json();
            }
        } catch (error) {
            console.log(error);
        }
    },
    updateProfile: async ( body , id ) => {
        try {
            const response = await fetch(`${URL_PREFIX}/profiles/${id}`, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            
            if (response.ok) {
                return console.log('FETCH COMPLETE');
            } else {
                alert('Unable to fetch');
            }
        } catch (error) {
            console.log(error);
        }
    },
    // Create Page
    createPage: async (userObj) => {
        try {
            const response = await fetch(`${URL_PREFIX}/pages`, {
                method: 'POST',
                body: JSON.stringify(userObj),
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            
            if (response.ok) {
                // return console.log(response.json());
                return await response.json();
            } else {
                // TESTING PURPOSES
                alert('Cannot create project');
            }

        } catch (error) {
            console.log(error);
        }
    },
    // Get Projects by User
    // getProjectsByUser: async (x) => {
        //     try {
            //         const response = await fetch(`${URL_PREFIX}/projects/user/${x}`, {
                //           method: 'GET',
                //           headers: {
                    //             'Content-Type': 'application/json'
                    //           }
                    //         });
                    
                    //         if (!response.ok) {
                        //           throw new Error('Network response was not ok');
                        //         }
                        
                        //         return response.json();
    //       } catch (error) {
    //          //console.error(error);
    //       }

    // },
    // Create Profile
    // findProjectsByName: async (x) => {
    //     try {
    //         const response = await fetch(`${URL_PREFIX}/projects/name/${x}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type' : 'application/json'
    //             }
    //         })
    //         if (response.ok) {
    //             return response.json();
    //         } else {
    //             alert('Unable to fetch');
    //         }
    //     } catch (error) {
    //         console.log(error);      
    //     }
    // },
    // getProjectById: async (x) => {
    //     try {
    //         const response = await fetch(`${URL_PREFIX}/projects/${x}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type' : 'application/json'
    //             }
    //         })
    //         if (response.ok) {
    //             return response.json();
    //         }
    //     } catch (error) {
            
    //     }
    // },
    // Message Routes
//     getMessages: async (projectId) => {
//         return fetch(`${URL_PREFIX}/messages/${projectId}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type' : 'application/json'
//             }
//         }).then(res=>res.json())
//     },
//     sendMessage: async (userId, projectId, text) => {
//         const message = { text };
//         return fetch(`${URL_PREFIX}/messages/${userId}/${projectId}`, {
//             method: 'POST',
//             body: JSON.stringify(message),
//             headers: {
//                 'Content-Type' : 'application/json'
//             }
//         }).then(res=>res.json())
//     },
//     joinProject: async (projectId, userId) => {
//         try {
//             const response = await fetch(`${URL_PREFIX}/projects/${projectId}/${userId}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type' : 'application/json'
//                 }
//             })

//             if (response.ok) {
//                 return await response.json();
//             } else {
//                 let err = await response.json()
//                 console.log(err);
//                 if (err.msg){
//                     alert(err.msg)
//                 } else 
//                   {alert('Unable to fetch');}

//                 return err;
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     },
//     deleteProject: async (projectId) => {
//         try {
//             const response = await fetch(`${URL_PREFIX}/projects/${projectId}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type' : 'application/json'
//                 }
//             })

//             if(response.ok) {
//                 return await response.json();
//             } else {
//                 let err = await response.json()
//                 console.log(err);
//                 if (err.msg){
//                     alert(err.msg)
//                 } else 
//                   {alert('Unable to fetch');}

//                 return err;
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
}
export default API