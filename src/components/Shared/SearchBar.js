import Icon from "./Icons"
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';



export default function SearchBar() {
    return (
        <div>
            <div>
                <form>
                    <input type="text" placeholder="city" value="" onChange={() => ""}/>
                </form>
            </div>
            <div>
                <Icon icon={faMagnifyingGlassLocation} />
            </div>
        </div>
    )
}