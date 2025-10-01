import MainNavigation from "./MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";

export default function PageLayout() {
    //const navigation = useNavigation();



    return (
        <>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
        </>
    )
}