import loading from '../../../assest/img/loading.svg'

import style from "./Loading.module.css"


function Loading() {
    return(
        <div className={style.loader_container}>
            <img className={style.Loader} src={loading} alt="Loading" />
        </div>
    )
}
export default Loading