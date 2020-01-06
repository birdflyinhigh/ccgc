import React from "react";
import {useParams} from "react-router-dom";
import EditableTable from "./CreateWord";
import {Tabs} from 'antd';

const {TabPane} = Tabs;

function callback(key) {
    console.log(key);
}


class CreateWords extends React.Component {


    render() {
        console.log(this.props)

        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={callback} className={'content-tab'}>
                    <TabPane tab="Admin" key="1">
                        <EditableTable/>
                    </TabPane>
                    <TabPane tab="Viewer" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Visitor" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>


            </div>
        )
    }
}


export default CreateWords




