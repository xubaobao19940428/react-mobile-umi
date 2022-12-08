import React, { useEffect } from 'react';
import { Button,Space} from 'antd-mobile'
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
            <Space wrap>
                <Button color='primary' fill='solid'>
                    Solid
                </Button>
                <Button color='primary' fill='outline'>
                    Outline
                </Button>
                <Button color='primary' fill='none'>
                    None
                </Button>
            </Space>
            <p>
                To get started, edit <code>pages/index.tsx</code> and save to reload.
            </p>
        </div>
    );
}
