import Heading from "./Heading"
import {Workingcardeven, Workingcardodd} from "./Workingcard"
import style from "../styles/Howitworks.module.css"

const working_content = [
    {
        title: "upload image",
        content: "Go to predict page and upload the image,it must be of type jpg."
    },
    {
        title: "process",
        content: "wait till the model predicts the image and genrate the caption is genrated. This process can take about minute or two."
    }
]

const Howitworks = () => {
    return (
        <div>
           <Heading heading="how it works"/>
           <div className={style.how_it_works_container}>
               {working_content.map((ele,index) =>{
                   return index%2==0 ? <Workingcardeven key={index} title={ele.title} content={ele.content} number={index+1}/>: <Workingcardodd key={index} title={ele.title} content={ele.content} number={index+1}/>
               })}
           </div>
        </div>
    )
}

export default Howitworks
