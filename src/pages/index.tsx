import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
    return (
        <div>
            <SafeEnvironment />
            <PageTitle
                title={"Conheça os profissionais"}
                subtitle={
                    "Preencha seu endereço e veja todos os profissionais da sua localidade"
                }
            />

            <UserInformation
                name={"Felipe Vilvert Pilz"}
                picture={"https://github.com/felipepilz.png"}
                rating={4}
                description={"Joinville, SC"}
            />

            <UserInformation
                name={"Carlinhos Maia"}
                picture={""}
                rating={1}
                description={"Ninguem sabe"}
            />
        </div>
    );
};

export default Home;
