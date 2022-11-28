import React, { useEffect } from 'react';
import { Link, Outlet, history } from 'umi';
import styles from './index.less';


export default function Layout() {
    const getQueryString = (key: string) => {
        var url = window.location.href //首先获取url
        if (url.indexOf('?') != -1) {
            //判断是否有参数
            var strSub: any = null
            var str = url.split('?') //根据？截取url
            var strs = str[1].split('&') //str[1]为获取？号后的字符串，并且根据&符号进行截取，得到新的字符串数组，这个字符串数组中有n个key=value字符串
            var value = ''
            for (var i = 0; i < strs.length; i++) {
                //遍历字符串数组
                strSub = strs[i].split('=') //取第i个key=value字符串，并用“=”截取获得新的字符串数组 这个数组里面第0个字符是key，第1个字符value
                if (strSub[0] == key) {
                    //判断第0个字符与该方法的参数key是否相等，如果相等 则返回对应的值value。
                    value = strSub[1]
                }
            }
            return value
        }
        return ''
    }
    useEffect(() => {
        let code: string | any = getQueryString('code')
        let key: string | any = getQueryString('key')
        console.log(code,key)
    })
    return (
        <div className={styles.navs}>

            <Outlet />
        </div>
    );
}
