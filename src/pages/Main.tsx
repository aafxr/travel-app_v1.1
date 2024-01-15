import React from 'react'
import AppFooter from "../components/AppFooter/AppFooter";
import AppContent from "../components/AppContent/AppContent";
import AppHeader from "../components/AppHeader/AppHeader";
import AppLayout from "../components/AppLayout/AppLayout";
import {Button} from "antd";

export default function Main() {

    return (
        <AppLayout>
            <AppHeader>Main header</AppHeader>
            <AppContent>
<Button type={"primary"}>1561321</Button>
            </AppContent>
            <AppFooter >123</AppFooter>
        </AppLayout>

    )
}
