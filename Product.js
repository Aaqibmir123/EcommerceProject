import { Fragment } from "react"
import ProductSummary from "./ProductSummary";
import Available from "./Available";
const product=()=>{
    return(
        <Fragment>
                <ProductSummary />
                <Available />
        </Fragment>
    )
}
export default product;