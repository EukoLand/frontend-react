import Mod from "./components/mod";
import SecuritySettings from "./components/security";
import Sessions from "./components/sessions";

export default function Security() {
    return(
        <>
            <Mod />
            {/* <Status /> */}
            <Sessions />
            <SecuritySettings />
        </>
    )
}