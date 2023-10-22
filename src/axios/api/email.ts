import {toast} from "react-toastify";

export const sendSubscribe = async (data:object) => {
    try {

        const response = await fetch("https://api.esollabs.com/v1/web-hub/inz/subscribe", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if(response){
            // const res = await client.post('/web-hub/inz/subscribe', data=data)
            toast.success("Subscribe successfully")
        }
      
    } catch (e: any) {
        console.error(e)
    }
    return
}