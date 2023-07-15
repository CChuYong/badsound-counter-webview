import DocumentLayout from "@/layout/DocumentLayout";
import {FaChevronRight} from "react-icons/fa";
import '../../app/global.css';
import '../../app/magcloud.css';
import MagCloudLayout from "@/layout/MagCloudLayout";

export default function Notice() {
    return <MagCloudLayout title={"문의하기"}>
            <div>어플리케이션에 관한 모든 문의는 아래 연락처로 부탁드려요!</div><br/>
        대표 번호: 010-5905-1783<br/>
        매지구름 문의: yeongmin1061@gmail.com
    </MagCloudLayout>
}
