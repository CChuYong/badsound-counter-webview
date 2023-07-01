import DocumentLayout from "@/layout/DocumentLayout";
import {FaChevronRight} from "react-icons/fa";
import '../app/global.css';

export default function Notice() {
    return <DocumentLayout title={"공지사항"}>
            <NoticeElements title={"나쁜말 카운터 런칭!"} date={"2023.06.23."}></NoticeElements>
            <NoticeElements title={"나쁜말 카운터 0.0.1 릴리즈!"} date={"2023.06.30."}></NoticeElements>
            <NoticeElements title={"나쁜말 카운터 이용방법"} date={"2023.07.01."}></NoticeElements>
    </DocumentLayout>
}

function NoticeElements({title, date}: {title: string, date: string}) {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: '13px'
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
