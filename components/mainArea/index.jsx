import "./style.css";

const MASubItem = ({ item }) => {
    return (
        <div className="mas-container">
            <div className="subtitle">{item.title}</div>
            <div className="mas-date">{item.date}</div>
            <div className="mas-description">{item.description}</div>
            {item.main_activities && (
                <div className="mas-main-activities">
                    <div style={{fontWeight: "bold"}}>Main Activities: </div>
                    {item.main_activities}
                </div>
            )}
            {item.used_technologies && (
                <div className="mas-used-technologies">
                    <div style={{fontWeight: "bold"}}>Technologies: </div>
                    {item.used_technologies}
                </div>
            )}
        </div>
    );
};

const MainAreaItem = ({ data }) => {
    return (
        <div className="ma-item-container">
            <div className="title">{data.title}</div>
            <div className="ma-subitems-container">
                {data.items.map((item) => {
                    return <MASubItem item={item} />;
                })}
            </div>
        </div>
    );
};

export default MainAreaItem;
