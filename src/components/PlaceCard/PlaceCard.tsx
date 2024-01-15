import React from 'react'
import {PlaceType} from "../../types/PlaceType";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

interface PlaceCardProps{
    place?:PlaceType
}

export default function PlaceCard({place}:PlaceCardProps) {
    return (
        <Card
            hoverable
            // style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}
