import React from 'react';
import { Link, Outlet } from 'umi';
import './index.less'
export default function Tabar() {
    return (
        <div>

            <Outlet />
            <ul className='nav_footer'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/docs">Docs</Link>
                </li>
                <li>
                    <Link to="/haha">Haha</Link>
                </li>
            </ul>
        </div>
    );
}



