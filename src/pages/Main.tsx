import React from 'react'

import AppFooter from "../components/AppFooter/AppFooter";
import AppContent from "../components/AppContent/AppContent";
import AppHeader from "../components/AppHeader/AppHeader";
import AppLayout from "../components/AppLayout/AppLayout";
import Container from "../components/Container/Container";
import FooterNavigation from "../components/FooterNavigation/FooterNavigation";
import HeaderPlate from "../components/HeaderPlate/HeaderPlate";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";
import MenuIcon from "../components/svg/MenuIcon";
import {Button} from "antd";

export default function Main() {

    return (
        <AppLayout>
            <AppHeader>
                <HeaderPlate>
                    <HeaderTitle arrow headerTitle={'Главная страница'} menu={<MenuIcon/>}/>
                </HeaderPlate>
            </AppHeader>
            <AppContent>
                <Container className='banner column gap-1'>
                    <div>Спланируйте поездку за минуты</div>
                    <div className='center'>
                    <Button className='dark-btn center'>Новая поездка</Button>
                    </div>
                </Container>
            </AppContent>
            <AppFooter>
                <FooterNavigation/>
            </AppFooter>
        </AppLayout>

    )
}
