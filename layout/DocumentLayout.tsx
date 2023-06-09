import {FaChevronLeft} from "react-icons/fa";

export default function DocumentLayout({children, title}: {children: React.ReactNode, title: String}) {
    return <div>
        <div style={{paddingLeft: 3, paddingBottom: 16, paddingTop: 16}}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
            }}>
                <FaChevronLeft size={18}/>
                <a style={{fontSize: 20}}>{title}</a>
            </div>
        </div>

        {children}
    </div>
}