import React from 'react';
import { Link, Outlet, history } from 'umi';
import './index.less'
export default function Tabar() {
    const tabbarUrl = [
        {
            imgUrlSelect: require('@/assets/tabarModule/home-select.png'),
            imgUnSelect: require('@/assets/tabarModule/home.png'),
            path: '/dashboard',
            name:'首页'
        },
        {
            imgUrlSelect: require('@/assets/tabarModule/message-select.png'),
            imgUnSelect: require('@/assets/tabarModule/message.png'),
            path: '/message',
            name:'消息'
        },
        {
            imgUrlSelect: require('@/assets/tabarModule/trade-select.png'),
            imgUnSelect: require('@/assets/tabarModule/trade.png'),
            path: '/trade',
            name:'交易'
        }, 
        {
            imgUrlSelect: require('@/assets/tabarModule/mine-select.png'),
            imgUnSelect: require('@/assets/tabarModule/mine.png'),
            path: '/mine',
            name:'我的'
        },
       
    ]
   
    return (

        <div className='layoutBox'>
            <Outlet />
            <ul className='nav_footer'>
                {
                    tabbarUrl.map(item => {
                        return <li key={item.path} className={history.location.pathname == item.path ? 'tabbar-item item-select' : 'tabbar-item'}>
                            <img src={history.location.pathname == item.path ? item.imgUnSelect : item.imgUnSelect} alt="" />
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    })
                }
                {/* <li>
                    {
                        if(history.location.path=='/dashboard'){
                            return 
                        }
                    }
                   
                </li>
                <li>
                    <Link to="/docs">Docs</Link>
                </li>
                <li>
                    <Link to="/haha">Haha</Link>
                </li> */}
            </ul>
        </div>
    );
}



