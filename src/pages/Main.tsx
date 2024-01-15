import React from 'react'

import AppFooter from "../components/AppFooter/AppFooter";
import AppContent from "../components/AppContent/AppContent";
import AppHeader from "../components/AppHeader/AppHeader";
import AppLayout from "../components/AppLayout/AppLayout";
import FooterBackplate from "../components/FooterBackplate/FooterBackplate";
import Container from "../components/Container/Container";
import FooterButton from "../components/FooterButton/FooterButton";
import PlaceCard from "../components/PlaceCard/PlaceCard";

export default function Main() {

    return (
        <AppLayout>
            <AppHeader>Main header</AppHeader>
            <AppContent>
                <Container>
                    <PlaceCard/>
                </Container>
            </AppContent>
            <AppFooter>
                <FooterBackplate shadow>
                    <FooterButton>Построить маршрут</FooterButton>
                </FooterBackplate>
            </AppFooter>
        </AppLayout>

    )
}
