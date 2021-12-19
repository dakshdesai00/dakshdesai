import { useCookies } from "react-cookie"

function ChooseMode() {
const [cookie, setCookie, removeCookie] = useCookies(["siteAppearenceMode"])
    return (
        <div className="choose_mode_main" >
            <h1 className="heading" >Choose Site Theme:</h1>
        </div>
    )
}

export default ChooseMode
