import { Circles } from 'react-loader-spinner';
 
export const Loader = () => {
        return (
            <>
                <Circles
                    height="30"
                    width="30"
                    color="rgb(79, 68, 60)"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />
            </>
        );
    }