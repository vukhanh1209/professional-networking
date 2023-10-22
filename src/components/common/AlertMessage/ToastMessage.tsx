import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToastMessage = () => {
    return(
        <>
            <ToastContainer
                className="flex flex-col justify-end"
                toastClassName="pr-4 w-full"
                bodyClassName= "font-montserrat text-sm font-medium"
                position="bottom-right"
                closeButton={false}
                autoClose={3000}
                hideProgressBar={false}
                limit={1}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
       
}

export default ToastMessage;