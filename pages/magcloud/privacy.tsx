import DocumentLayout from "@/layout/DocumentLayout";
import {FaChevronRight} from "react-icons/fa";
import '../../app/global.css';
import '../../app/magcloud.css';
import MagCloudLayout from "@/layout/MagCloudLayout";

export default function Privacy() {
    return <MagCloudLayout title={"개인정보 처리방침"}>
        <>
            <p>
                <em className="emphasis">
                    &lt; 베어어스 &gt;('https://bearus.co/'이하 '매지구름')
                </em>
                은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와
                관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이
                개인정보 처리방침을 수립·공개합니다.
            </p>
            <p>
                ○ 이 개인정보처리방침은 <em className="emphasis">2023</em>년{" "}
                <em className="emphasis">7</em>월 <em className="emphasis">1</em>부터
                적용됩니다.
            </p>
            <br/>
            <p className=" ">
                <strong>
                    제1조(개인정보의 처리 목적)
                    <br/>
                    <br/>
                    <em className="emphasis">
                        &lt; 베어어스 &gt;('https://bearus.co/'이하 '매지구름')
                    </em>
                    은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
                    개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이
                    변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등
                    필요한 조치를 이행할 예정입니다.
                </strong>
            </p>
            <ul className="list_indent2 mgt10">
                <p>1. 홈페이지 회원가입 및 관리</p>
                <p>
                    회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격
                    유지·관리, 서비스 부정이용 방지 목적으로 개인정보를 처리합니다.
                </p>
                <br/>
                <p>2. 재화 또는 서비스 제공</p>
                <p>
                    서비스 제공, 콘텐츠 제공, 맞춤서비스 제공을 목적으로 개인정보를
                    처리합니다.
                </p>
                <br/>
            </ul>
            <br/>
            <br/>
            <p className=" ">
                <strong>제2조(개인정보의 처리 및 보유 기간)</strong>
                <br/>
                <br/>① <em className="emphasis">&lt; 베어어스 &gt;</em>은(는) 법령에 따른
                개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은
                개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                <br/>
                <br/>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
            </p>
            <ul className="list_indent2 mgt10">
                <li>1. &lt;홈페이지 회원가입 및 관리&gt;</li>
                <li>
                    &lt;홈페이지 회원가입 및 관리&gt;와 관련한 개인정보는 수집.이용에 관한
                    동의일로부터&lt;1년&gt;까지 위 이용목적을 위하여 보유.이용됩니다.
                </li>
                <li>보유근거 : 회원 자격 관리</li>
            </ul>
            <br/>
            <br/>
            <p className=" ">
                <strong>제3조(처리하는 개인정보의 항목) </strong>
                <br/>
                <br/> ① <em className="emphasis">&lt; 베어어스 &gt;</em>은(는) 다음의
                개인정보 항목을 처리하고 있습니다.
            </p>
            <ul className="list_indent2 mgt10">
                <li>1&lt; 홈페이지 회원가입 및 관리 &gt;</li>
                <li>필수항목 : 이름, 로그인ID, 이메일</li>
            </ul>
            <br/>
            <br/>
            <p className=" ">
                <strong>제4조(개인정보의 국외 이전에 관한 사항)</strong>
            </p>
            <p>
                <br/>
                <br/>① 회사은(는) 개인정보 관리 업무를 국외 법인인 Amazon Web Services
                Inc.에 아래와 같이 위탁하고 있습니다.
            </p>
            <p className="sub_p">1. 수탁업체: Amazon Web Services Inc.</p>
            <p className="sub_p">
                2. 수탁업체의 위치:서울특별시 강남구 논현로 508 13층 (역삼동,지에스타워)
            </p>
            <p className="sub_p">
                3. 위탁 일시 및 방법: 서비스 이용시점에 네트워크를 통한 전송
            </p>
            <p className="sub_p">4. 정보관리책임자의 연락처 : 전자우편 주소, 전화번호</p>
            <p className="sub_p">
                5. 위탁하는 개인정보 항목 : 서비스 이용 기록 또는 수집된 개인정보
            </p>
            <p className="sub_p">
                6. 위탁 업무 내용 : &lt;개인정보처리자의 위탁하는 개인정보 처리업무&gt;
                재난, 재해 등으로부터 이용자 데이터 보호를 위한 국가간 데이터 백업(보관)
            </p>
            <p className="sub_p">7. 개인정보의 보유 및 이용기간 : 서비스 변경시까지</p>
            <br/>
            <br/>
            <p className=" ">
                <strong>
                    제5조(개인정보의 파기절차 및 파기방법)
                    <em className="emphasis"/>
                </strong>
            </p>
            <em className="emphasis">
                <p>
                    <br/>① &lt; 베어어스 &gt; 은(는) 개인정보 보유기간의 경과, 처리목적 달성
                    등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
                    파기합니다.
                    <br/>
                    <br/>② 개인정보 파기의 절차 및 방법은 다음과 같습니다.
                    <br/>
                    1. 파기절차
                    <br/> &lt; 베어어스 &gt; 은(는) 파기 사유가 발생한 개인정보를 선정하고,
                    &lt; 베어어스 &gt; 의 개인정보 보호책임자의 승인을 받아 개인정보를
                    파기합니다.
                    <br/>
                </p>
                <p className="sub_p mgt10">2. 파기방법</p>
                <p className="sub_p">
                    전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다
                </p>
                <br/>
                <br/>
                <p className=" ">
                    <strong>
                        제6조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)
                    </strong>
                </p>
                <p>
                    <br/>
                    <br/>① 정보주체는 베어어스에 대해 언제든지 개인정보
                    열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                </p>
                <p className="sub_p">
                    ② 제1항에 따른 권리 행사는베어어스에 대해 「개인정보 보호법」 시행령
                    제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수
                    있으며 베어어스은(는) 이에 대해 지체 없이 조치하겠습니다.
                </p>
                <p className="sub_p">
                    ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등
                    대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한
                    고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
                </p>
                <p className="sub_p">
                    ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항,
                    제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
                </p>
                <p className="sub_p">
                    ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로
                    명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
                </p>
                <p className="sub_p">
                    ⑥ 베어어스은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구,
                    처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를
                    확인합니다.
                </p>
                <br/>
                <br/>
                <p className=" ">
                    <strong>
                        제7조(개인정보의 안전성 확보조치에 관한 사항)
                        <em className="emphasis">
                            <br/>
                            <br/>
                            &lt; 베어어스 &gt;
                        </em>
                        은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                    </strong>
                </p>
                <p className="sub_p mgt10">
                    1. 개인정보에 대한 접근 제한
                    <br/> 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
                    부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를
                    하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고
                    있습니다.
                    <br/>
                    <br/>
                    2. 개인정보의 암호화
                    <br/> 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어,
                    본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나
                    파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
                    <br/>
                    <br/>
                    3. 해킹 등에 대비한 기술적 대책
                    <br/> &lt;<em className="emphasis">베어어스</em>&gt;('
                    <em className="emphasis">매지구름</em>')은 해킹이나 컴퓨터 바이러스 등에
                    의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인
                    갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고
                    기술적/물리적으로 감시 및 차단하고 있습니다.
                    <br/>
                    <br/>
                </p>
                <br/>
                <br/>
                <p className=" ">
                    <strong>
                        제8조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한
                        사항)
                    </strong>
                </p>
                <p>
                    <br/>
                    <br/>
                    베어어스 은(는) 정보주체의 이용정보를 저장하고 수시로 불러오는
                    ‘쿠키(cookie)’를 사용하지 않습니다.
                    <br/>
                    <br/>
                </p>
                <p className=" ">
                    <strong>제9조(행태정보의 수집·이용·제공 및 거부 등에 관한 사항)</strong>
                </p>
                <p>
                    <br/>
                    <br/>
                    행태정보의 수집·이용·제공 및 거부등에 관한 사항
                </p>
                <p className="sub_p">
                    &lt;개인정보처리자명&gt;은(는) 온라인 맞춤형 광고 등을 위한 행태정보를
                    수집·이용·제공하지 않습니다.
                </p>
                <br/>
                <br/>
                <p className=" ">
                    <strong>
                        제10조(추가적인 이용·제공 판단기준)
                        <em className="emphasis"/>
                    </strong>
                    <em className="emphasis">
                        <br/>
                        <br/>
                        &lt; 베어어스 &gt; 은(는) ｢개인정보 보호법｣ 제15조제3항 및 제17조제4항에
                        따라 ｢개인정보 보호법 시행령｣ 제14조의2에 따른 사항을 고려하여
                        정보주체의 동의 없이 개인정보를 추가적으로 이용·제공할 수 있습니다. 이에
                        따라 &lt; 베어어스 &gt; 가(이) 정보주체의 동의 없이 추가적인 이용·제공을
                        하기 위해서 다음과 같은 사항을 고려하였습니다.
                        <br/>
                    </em>
                </p>
                <em className="emphasis">
                    <br/>
                    <br/>
                    <p className=" ">
                        <strong>
                            제11조(가명정보를 처리하는 경우 가명정보 처리에 관한 사항)
                        </strong>
                        <em className="emphasis">
                            <br/>
                            <br/>
                            &lt; 베어어스 &gt; 은(는) 다음과 같은 목적으로 가명정보를 처리하고
                            있습니다.
                        </em>
                    </p>
                    <em className="emphasis">
                        <p className="sub_p"/>
                        <p className="sub_p">▶ 가명정보의 처리 목적</p>
                        <p className="sub_p">서비스 내 닉네임 항목 제공</p>
                        <p className="sub_p"/>
                        <p className="sub_p">▶ 가명정보의 처리 및 보유기간</p>
                        <p className="sub_p">서비스 탈퇴시까지</p>
                        <p className="sub_p"/>
                        <p className="sub_p"/>
                        <p className="sub_p mgt30">
                            <strong>제12조 (개인정보 보호책임자에 관한 사항) </strong>
                        </p>
                        <p className="sub_p mgt10">
                            {" "}
                            ① <span className="colorLightBlue">베어어스</span> 은(는) 개인정보
                            처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
                            정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보
                            보호책임자를 지정하고 있습니다.
                        </p>
                        <ul className="list_indent2 mgt10">
                            <li>▶ 개인정보 보호책임자</li>
                            <li>성명 :송영민</li>
                            <li>직책 :개인정보관리책임자</li>
                            <li>직급 :개발자</li>
                            <li>연락처 :010-5905-1783, yeongmin1061@gmail.com,</li>
                        </ul>
                        <p className="sub_p">
                            ② 정보주체께서는 베어어스 의 서비스(또는 사업)을 이용하시면서 발생한
                            모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을
                            개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 베어어스
                            은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                        </p>
                        <p className="sub_p mgt30">
                            <strong>
                                제13조(개인정보의 열람청구를 접수·처리하는 부서)
                                <br/> 정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람
                                청구를 아래의 부서에 할 수 있습니다.
                                <br/>
                                &lt; 베어어스 &gt;은(는) 정보주체의 개인정보 열람청구가 신속하게
                                처리되도록 노력하겠습니다.{" "}
                            </strong>
                        </p>
                        <br/>
                        <br/>
                        <p className=" ">
                            <strong>
                                제14조(정보주체의 권익침해에 대한 구제방법)
                                <em className="emphasis"/>
                            </strong>
                        </p>
                        <br/>
                        <br/>
                        정보주체는 개인정보침해로 인한 구제를 받기 위하여
                        개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에
                        분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의
                        신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
                        <br/>
                        <br/>
                        1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
                        <br/>
                        2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
                        <br/>
                        3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
                        <br/>
                        4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
                        <br/>
                        <br/>
                        「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제),
                        제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의
                        장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는
                        행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
                        <br/>
                        <br/>
                        ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr)
                        홈페이지를 참고하시기 바랍니다.
                        <br/>
                        <br/>
                        <p className=" ">
                            <strong>
                                제15조(개인정보 처리방침 변경)
                                <em className="emphasis"/>
                            </strong>
                        </p>
                        <br/>
                        <p/>
                        <p className="sub_p">
                            ① 이 개인정보처리방침은 2023년 7월 1부터 적용됩니다.
                        </p>
                    </em>
                </em>
            </em>
        </>
    </MagCloudLayout>
}
