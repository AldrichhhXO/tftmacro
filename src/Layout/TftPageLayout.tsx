import React from 'react'
import PageLayout from './PageLayout'
import TftNavbar from '../Components/Navbar/TftNavbar'

export default function TftPageLayout(props: any) {
    return (
        <PageLayout>
            <TftNavbar />
            {props.children}
        </PageLayout>
    )
}
