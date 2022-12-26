import React, { useEffect, useRef } from 'react';
import { Button, Space, Swiper } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'
import { getExpertLatestRecordList } from '@/request/expert'
import './index.less'
const colors = [require('@/assets/banner1.png'), require('@/assets/banner2.png'), require('@/assets/banner1.png')]
const indexCate = [
    {
        title: "游戏",
        icon: require('@/assets/game.png')
    },
    {
        title: "情感",
        icon: require('@/assets/game.png')
    },
    {
        title: "性格",
        icon: require('@/assets/game.png')
    },
    {
        title: "智商",
        icon: require('@/assets/game.png')
    },
    {
        title: "职场",
        icon: require('@/assets/game.png')
    },
]
const items = colors.map((item, index) => (
    <Swiper.Item key={index}>
        <img
            className='content'
            src={item}
        // src={{ background: `url(${index})` }}
        />

    </Swiper.Item>
))
export default function HomePage() {
    const ref = useRef<SwiperRef>(null)
    useEffect(() => {
        getExpertLatestRecordListInfo()
    }, [])
    function getExpertLatestRecordListInfo() {
        getExpertLatestRecordList({}).then(response => {

        }).catch(error => {

        })
    }
    return (

        <div className='dashboardPage'>
            <Swiper loop>{items}</Swiper>
            <div className='dashboardCate'>
                {
                    indexCate.map((item, index) => {
                        return <div key={index} className="cateChild">
                            <img src={item.icon} alt=""  />
                            <span>{item.title}</span>
                        </div>
                    })
                    //  for(var i=0;i<indexCate.length;i++){

                    //  }
                }
            </div>
        </div>
    );
}
