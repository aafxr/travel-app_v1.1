import React from 'react'
import AppHeader from "../components/AppHeader/AppHeader";
import AppContent from "../components/AppContent/AppContent";
import Container from "../components/Container/Container";
import AppFooter from "../components/AppFooter/AppFooter";
import FooterNavigation from "../components/FooterNavigation/FooterNavigation";
import AppLayout from "../components/AppLayout/AppLayout";
import HeaderPlate from "../components/HeaderPlate/HeaderPlate";

export default function Favorites() {
    return (
        <AppLayout>
            <AppHeader>
                <HeaderPlate>

                </HeaderPlate>
            </AppHeader>
            <AppContent>
                <Container>
                    <div>Favorites</div>
                </Container>
            </AppContent>
            <AppFooter>
                <FooterNavigation/>
            </AppFooter>
        </AppLayout>
    )
}
