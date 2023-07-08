import DocumentLayout from "@/layout/DocumentLayout";
import {FaChevronRight} from "react-icons/fa";
import '../../app/global.css';
import '../../app/magcloud.css';
import MagCloudLayout from "@/layout/MagCloudLayout";

export default function Notice() {
    return <MagCloudLayout title={"공지사항"}>
            <NoticeElements title={"매지구름 런칭!"} date={"2023.07.08."}></NoticeElements>
    </MagCloudLayout>
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
