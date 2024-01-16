import React from 'react'
import AppLayout from "../components/AppLayout/AppLayout";
import AppHeader from "../components/AppHeader/AppHeader";
import AppContent from "../components/AppContent/AppContent";
import Container from "../components/Container/Container";
import AppFooter from "../components/AppFooter/AppFooter";
import FooterNavigation from "../components/FooterNavigation/FooterNavigation";
import HeaderPlate from "../components/HeaderPlate/HeaderPlate";

export default function RoutesList() {
    return (
        <AppLayout>
            <AppHeader>
                <HeaderPlate>

                </HeaderPlate>
            </AppHeader>
            <AppContent>
                <Container>
                    <div>RoutesList</div>
                </Container>
            </AppContent>
            <AppFooter>
                <FooterNavigation/>
            </AppFooter>
        </AppLayout>
    )
}
