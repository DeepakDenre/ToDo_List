import "../css/Utilitybar.css"
import AddTask from "./AddTask";

function Utilitybar(){
    return (
        <>
        <div className="Utilitybar-wrapper">
            <div className="Utilitybar-content">
                <AddTask/>
            </div>
        </div>
        </>
    );
}

export default Utilitybar;