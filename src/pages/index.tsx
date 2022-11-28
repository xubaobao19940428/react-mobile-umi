import React, { useEffect } from 'react';
import yayJpg from '@/assets/yay.jpg';
import { Button } from 'antd-mobile'
import { getExpertLatestRecordList } from '@/request/expert'
import './index.less'
export default function HomePage() {
    useEffect(() => {
        getExpertLatestRecordListInfo()
    }, [])
    function getExpertLatestRecordListInfo() {
        getExpertLatestRecordList({}).then(response => {

        }).catch(error => {

        })
    }
    return (
        <div>
            <h2>Yay! Welcome to umi!</h2>
            <Button>{process.env.UMI_APP_FILE_URL}</Button>
            <p>
                <img src={yayJpg} width="388" />
            </p>
            <p>
                To get started, edit <code>pages/index.tsx</code> and save to reload.
            </p>
        </div>
    );
}
