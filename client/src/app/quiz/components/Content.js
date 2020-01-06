import React from "react";
import {useParams} from "react-router-dom";
import EditableTable from "./CreateWord";


class CreateWords extends React.Component {


    render() {
        console.log(this.props)

        return (
            <div>
                <EditableTable/>
            </div>
        )
    }
}


export default CreateWords




