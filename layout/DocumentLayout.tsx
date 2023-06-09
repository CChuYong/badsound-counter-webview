import {FaChevronLeft} from "react-icons/fa";
import {useEffect} from "react";


export default function DocumentLayout({children, title}: {children: React.ReactNode, title: String}) {
    let returnPage: () => void = () => {};
    useEffect(() => {
        import('webview-javascript-bridge').then((ir) => {
            returnPage = () => {
                ir.default.sendMessage({
                    action: 'return',
                });
            }
        })
    }, []);
    return <div>
        <div style={{paddingLeft: 3, paddingBottom: 16, paddingTop: 16}}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
            }}>
                <FaChevronLeft size={18} onClick={returnPage}/>
                <a style={{fontSize: 20}}>{title}</a>
            </div>
        </div>

        {children}
    </div>
}
