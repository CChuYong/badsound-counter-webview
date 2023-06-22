import DocumentLayout from "@/layout/DocumentLayout";
import {FaChevronRight} from "react-icons/fa";

export default function Notice() {
    return <DocumentLayout title={"공지사항"}>
        <NoticeElements title={"나쁜말 카운터 런칭!"} date={"2023.06.23."}></NoticeElements>
    </DocumentLayout>
}

function NoticeElements({title, date}) {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between"
    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <a style={{fontSize: '24'}}>{title}</a>
            <a>{date}</a>
        </div>
        <FaChevronRight/>
    </div>
}
